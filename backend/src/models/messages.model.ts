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
  seen: [String],
  messages: [MessageSchema],
});

MessagesListSchema.pre<messagesListSchema>(
  "validate",
  function (this: messagesListSchema, next) {
    this.seen = [];
    next();
  }
);

MessagesListSchema.statics.newRoom = (args) => new msg(args).save();

MessagesListSchema.statics.pushMessage = (query, newMsg) =>
  msg.updateOne(query, { $push: { messages: newMsg } });

export const msg = model<messagesListSchema, messagesModelInterface>(
  "chatapp.messages",
  MessagesListSchema
);
