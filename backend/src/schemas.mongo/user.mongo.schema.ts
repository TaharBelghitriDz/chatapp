import { Callback, Document, Model } from "mongoose";

export interface userSchemaInterface extends Document {
  name: string;
  email: string;
  password: string;
  cover?: string;
}

export interface userModelINterface extends Model<userSchemaInterface> {
  addUser: (a: findUserInterface & { password: string }) => any;
  findUser: (
    args: findUserInterface,
    clb: (args: dbResultType | null) => void
  ) => Promise<{ err: any; token: any }>;
}

export type dbResultType = {
  _id: string;
} & userSchemaInterface;

export interface findUserInterface {
  _id?: string;
  email?: string;
  name?: string;
}
