import { model, Schema } from "mongoose";
import {
  messageSchema,
  messagesListSchema,
  messagesModelInterface,
} from "../schemas.mongo/messages.mongo.schema";

const MessageSchema = new Schema<messageSchema>({
  fromName: String,
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

export const msg = model<messagesListSchema, messagesModelInterface>(
  "chatapp.messages",
  MessagesListSchema
);
