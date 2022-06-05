import { Callback, Document, Model } from "mongoose";

export interface userSchemaInterface extends Document {
  name: string;
  email: string;
  password: string;
  cover?: string;
}

export interface userModelINterface extends Model<userSchemaInterface> {
  addUser: (a: findUserInterface & { password: string }) => any;
}

export interface dbResultType extends userSchemaInterface {
  _id: any;
}

export interface findUserInterface {
  _id?: string;
  email?: string;
  name?: string;
}
