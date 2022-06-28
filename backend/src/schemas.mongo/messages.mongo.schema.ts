import { Document, FilterQuery, Model } from "mongoose";

export interface messagesListInterface {
  usersId: string[];
  seen: string[];
  messages: messageSchema[];
}

export type messagesListSchema = Document & messagesListInterface;

export interface messageInterafce {
  fromTo: string[];
  date: string;
  content: string;
  repsponseOf?: string;
  reaction?: string;
  transfer?: string;
}

export type messageSchema = Document & messageInterafce;

export interface messagesModelInterface extends Model<messagesListSchema> {
  newRoom: (args: FilterQuery<messagesListSchema>) => Promise<unknown>;
  pushMessage: (
    Query: FilterQuery<messagesListSchema> & { _id: string },
    newMessage: messageInterafce
  ) => Promise<messagesListInterface | undefined>;
}
