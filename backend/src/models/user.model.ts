import { hash } from "bcryptjs";
import { FilterQuery, model, Schema } from "mongoose";
import { tokenSign } from "../helpers/jwt";
import { AvatarGenerator } from "random-avatar-generator";
import {
  dbResultType,
  findUserInterface,
  userModelINterface,
  userSchemaInterface,
} from "../schemas/mongo/user.mongo.schema";

const userSchema = new Schema<userSchemaInterface>({
  name: String,
  email: String,
  password: String,
  cover: String,
  followers: [String],
  follwed: [String],
});

userSchema.pre<userSchemaInterface>(
  "validate",
  function (this: userSchemaInterface, next) {
    //random pics
    let newAvatar = new AvatarGenerator().generateRandomAvatar();
    const unwantedString = newAvatar
      .split("?")[1]
      .split("&")
      .slice(0, 2)
      .join("&");
    newAvatar = newAvatar.replace(unwantedString, "");

    this.cover = newAvatar;

    hash(this.password, 8, (err, hash) => {
      if (err) throw err;
      this.password = hash;
      next();
    });
  }
);

userSchema.statics.addUser = (args: userSchemaInterface) =>
  new user(args)
    .save()
    .then(({ _id }) => {
      const token = tokenSign(_id);
      return { token };
    })
    .catch((err: any) => {
      if (err.err) return { err: err.err };
      else return { err: "somthign wrong happend" };
    });

userSchema.statics.findUser = (
  args: FilterQuery<findUserInterface>,
  clb: (args: dbResultType | null) => void
) =>
  user
    .findOne(args)
    .then(clb)
    .catch((err) => {
      console.log(err);
      if (err.err) return { err: err };
      else return { err: "something wrong happend" };
    });

export const user = model<userSchemaInterface, userModelINterface>(
  "chatapp.user",
  userSchema
);
