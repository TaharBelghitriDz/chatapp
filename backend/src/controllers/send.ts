import { tokenVrfy } from "../helpers/jwt";
import { validateId } from "../helpers/sockeIoHelpers";
import { msg } from "../models/messages.model";
import { user } from "../models/user.model";
import { sendType } from "../types.interfaces/messages.types";

export const send: sendType = async (args, socket) => {
  const { emit, handshake } = socket;
  if (args.content.split(" ").join("") === "")
    emit("err", "you cant' send empty text");

  const msgs = validateId(args.room) && (await msg.findOne({ _id: args.room }));

  const otherUser = await user.findOne({ name: args.to });
  const senderId: any = tokenVrfy(handshake.auth.token);

  const date = Date.now().toString();
  if (!otherUser) return emit("err", "something wrong happend");
  console.log("here");
  if (msgs)
    msg
      .pushMessage(
        { _id: args.room },
        {
          fromTo: msgs.usersId,
          date,
          content: args.content,
        }
      )
      .then((rslt) => {
        console.log("heree ");
        if (!rslt) emit("err", "somthing wrong happend");
        else {
          console.log("emited result");
          console.log({
            content: args.content,
            date,
          });
          emit("send", {
            content: args.content,
            date,
          });
        }
      })
      .catch((err) => {
        // loging here
        console.log(err);
        emit("err", "somthing wrong happend");
      });
  else {
    console.log("new chat creating");
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
          emit("err", "somethign wrong happend");
        });
    else send({ ...args, room: `${checkMessages._id}` }, socket);
  }
};
