import { model, Schema } from "mongoose";
import {
  messageSchema,
  messagesListSchema,
  messagesModelInterface,
} from "../schemas.mongo/messages.mongo.schema";

const MessageSchema = new Schema<messageSchema>({
  fromTo: [String],
  date: String,
  content: String,
  repsponseOf: String,
  reaction: String,
  transfer: String,
});

const MessagesListSchema = new Schema<messagesListSchema>({
  usersId: [String],
  seen: Boolean || [String],
  messages: [MessageSchema],
});

MessagesListSchema.pre<messagesListSchema>(
  "validate",
  function (this: messagesListSchema, next) {
    this.seen = false;
    this.messages = [];
    next();
  }
);

MessagesListSchema.statics.newRoom = (args) =>
  new msg(args)
    .save()
    .then((result) => {
      if (result) return { err: false };
      else return { err: "something wrong happend" };
    })
    .catch((err) => {
      //loging here
      console.log(err);
      return { err: "somthing wrong happend" };
    });

MessagesListSchema.statics.pushMessage = (query, newMsg) =>
  msg.updateOne(query, { $push: { messages: newMsg } });

export const msg = model<messagesListSchema, messagesModelInterface>(
  "chatapp.messages",
  MessagesListSchema
);
