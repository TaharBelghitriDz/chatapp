import { model, Schema } from "mongoose";
import {
  messageSchema,
  messagesListSchema,
  messagesModelInterface,
} from "../schemas.mongo/messages.mongo.schema";

const MessageSchema = new Schema<messageSchema>({
  fromId: String,
  date: String,
  content: String,
  repsponseOf: String,
  reaction: String,
  transfer: String,
});

const MessagesListSchema = new Schema<messagesListSchema>({
  userId: String,
  seen: Boolean || [String],
  messages: [MessageSchema],
});

export const msg = model<messagesListSchema, messagesModelInterface>(
  "chatapp.messages",
  MessagesListSchema
);
