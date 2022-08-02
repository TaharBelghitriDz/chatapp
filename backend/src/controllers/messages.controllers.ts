import { tokenVrfy } from "../helpers/jwt";
import { validateId } from "../helpers/sockeIoHelpers";
import { msg } from "../models/messages.model";
import { user } from "../models/user.model";
import {
  reactionType,
  removeMessagetype,
  seenType,
  sendType,
} from "../types/messages.types";

export const send: sendType = async (args, socket) => {
  if (args.content?.split(" ").join("") === "")
    socket.emit("err", "you cant' send empty text");

  const msgs = validateId(args.room) && (await msg.findOne({ _id: args.room }));

  const otherUser = await user.findOne({ name: args.to });
  const senderId: any = tokenVrfy(socket.handshake.auth.token);

  const date = Date.now().toString();
  if (!otherUser) return socket.emit("err", "something wrong happend");

  if (msgs)
    msg
      .pushMessage(
        { _id: args.room },
        {
          from: senderId.str,
          date,
          content: args.content,
          reaction: "no",
          repsponseOf: "no",
          transfer: "no",
        }
      )
      .then((rslt) => {
        if (!rslt) socket.emit("err", "somthing wrong happend");
        else
          socket.emit("send", {
            content: args.content,
            date,
          });
      })
      .catch((err) => {
        // loging here
        console.log(err);
        socket.emit("err", "somthing wrong happend");
      });
  else {
    const checkMessages = await msg.findOne({
      $or: [
        { usersId: [senderId.str, otherUser._id] },
        { usersId: [otherUser._id, senderId.str] },
      ],
    });
    if (!checkMessages)
      msg
        .newRoom({ usersId: [senderId.str, otherUser._id] })
        .then((result) => {
          socket.emit("send ", {
            content: args.content,
            date,
          });
        })
        .catch((err) => {
          //loging here
          console.log(err);
          socket.emit("err", "somethign wrong happend");
        });
    else send({ ...args, room: `${checkMessages._id}` }, socket);
  }
};

export const reaction: reactionType = async (args, socket) => {
  //check reaction if it's valid emojis and conatin only emojis

  const senderId: any = tokenVrfy(socket.handshake.auth.token);

  const mongoQuery = msg.findOne(
    {
      _id: args.room,
      "messages._id": args.msgId,
    },
    "messages.$"
  );

  const room =
    validateId(args.room) && validateId(args.msgId) && (await mongoQuery);
  if (!room) return socket.emit("err", "unvalid room");

  const message = room.messages[0];
  message.reaction = args.reaction;
  message
    .save()
    .then(() => socket.emit("reaction", "reacted"))
    .catch((err) => {
      //loging here
      socket.emit("err", "something wrong happend");
    });
};

export const seen: seenType = async ({ room }, socket) => {
  const senderId: any = tokenVrfy(socket.handshake.auth.token);

  const msgs =
    validateId(room) &&
    (await msg.findOne({ _id: room, usersId: senderId.str }));

  if (!msgs) return socket.emit("err", "something wrong happend");

  if (msgs.seen.includes(senderId))
    return socket.emit("seen", { seen: msgs.seen });

  msgs.seen.push(senderId.str);
  msgs
    .save()
    .then(() => socket.emit("seen", { seen: msgs.seen }))
    .catch((err) => {
      //loging here
      socket.emit("err", "something wrong happend");
    });
};

export const remove: removeMessagetype = async ({ room, msgId }, socket) => {
  const senderId: any = tokenVrfy(socket.handshake.auth.token);

  const removedMsg =
    validateId(room) &&
    validateId(msgId) &&
    (await msg.findOne(
      {
        _id: room,
        usersId: senderId.str,
        "messages._id": msgId,
        "messages.from": senderId.str,
      },
      "messages.$"
    ));

  if (!removedMsg) return socket.emit("err", "something wrong happend");

  // i won't remove it to let the other user see "message removed" like facebook
  removedMsg.messages[0].content = "";
  removedMsg
    .save()
    .then(() => socket.emit("remove", "removed"))
    .catch((err) => {
      //loging here
      socket.emit("err", "something wrong happend");
    });
};
