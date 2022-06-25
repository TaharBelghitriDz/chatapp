import { Document, Model } from "mongoose";

export interface messagesListSchema extends Document {
  usersId: string[];
  seen: boolean | string[];
  messages: messageSchema[];
}

interface msgType {
  fromId: string;
  date: string;
  content: string;
  repsponseOf?: string;
  reaction?: string;
  transfer?: string;
}

export interface messageSchema extends Document {
  fromName: string;
  date: string;
  content: string;
  repsponseOf?: string;
  reaction?: string;
  transfer?: string;
}

export interface messagesModelInterface extends Model<messagesListSchema> {
  add: () => void;
}
