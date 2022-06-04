import { model, Schema } from "mongoose";
import {
  userModelINterface,
  userSchemaInterface,
} from "../schemas.mongo/user.mongo.schema";

const userSchema = new Schema<userSchemaInterface>({
  name: String,
  email: String,
  password: String,
  cover: String,
});

userSchema.pre<userSchemaInterface>(
  "validate",
  function (this: userSchemaInterface, next) {
    //random pics
    // cover :
  }
);

export const user = model<userSchemaInterface, userModelINterface>(
  "chatapp.user",
  userSchema
);
