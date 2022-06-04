import { Document, Model } from "mongoose";

export interface userSchemaInterface extends Document {
  name: string;
  email: string;
  password: string;
  cover?: string;
}

export interface userModelINterface extends Model<userSchemaInterface> {}
