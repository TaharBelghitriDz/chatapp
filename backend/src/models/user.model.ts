import { hash } from "bcryptjs";
import { Callback, model, Schema } from "mongoose";
import {
  dbResultType,
  findUserInterface,
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
    hash(this.password, 8, (err, hash) => {
      if (err) throw err;
      this.password = hash;
      next();
    });
  }
);

userSchema.statics.addUser = (args: userSchemaInterface) =>
  new user(args).save((err, result) => {
    console.log(result);
    if (err) return { err: "somthing wrong happend" };
    else return { token: "token" };
  });

userSchema.statics.findUser = (
  args: findUserInterface,
  clb: (args: dbResultType | null) => any
) =>
  user
    .findOne({ args })
    .then(clb)
    .catch(({ err }) => {
      if (err) return { err };
      else return { err: "something wrong happend please try again" };
    });

export const user = model<userSchemaInterface, userModelINterface>(
  "chatapp.user",
  userSchema
);
