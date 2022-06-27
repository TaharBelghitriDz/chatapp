import { msg } from "../models/messages.model";
import { user } from "../models/user.model";
import { sendType } from "../types.interfaces/messages.types";

export const send: sendType = async (args, { emit }) => {
  if (args.content.split(" ").join("") === "")
    emit("err", "you cant' send empty text");
  const msgs = await msg.findOne({ _id: args.room });
  const date = Date.now().toString();

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
        emit("err", "somthing wrong happend");
      });
  else {
    msg.newRoom({ usersId: [] });
  }
};
