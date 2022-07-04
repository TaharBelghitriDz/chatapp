import { Callback, Document, Model } from "mongoose";
import { messagesListSchema } from "./messages.mongo.schema";

export interface userDataInterface {
  name: string;
  email: string;
  password: string;
  cover?: string;
  followers?: string[];
  follwed?: string[];
}
export type userSchemaInterface = Document & userDataInterface;

export interface userModelINterface extends Model<userSchemaInterface> {
  addUser: (a: findUserInterface & { password: string }) => any;
  findUser: (
    args: findUserInterface,
    clb: (args: dbResultType | null) => void
  ) => Promise<any>;
}

export type dbResultType = {
  _id: string;
} & userSchemaInterface;

export type messagesResultType = {
  _id: string;
} & messagesListSchema;

export interface findUserInterface {
  _id?: string;
  email?: string;
  name?: string;
}

export interface returnedUserInterface {
  name: string;
  cover?: string;
  followers?: string;
  follwed?: string;
}
