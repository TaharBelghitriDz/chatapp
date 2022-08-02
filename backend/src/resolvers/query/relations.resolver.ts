import { msg } from "../../models/messages.model";
import { user } from "../../models/user.model";
import {
  dbResultType,
  messagesResultType,
  userDataInterface,
  userSchemaInterface,
} from "../../schemas/mongo/user.mongo.schema";

export const findUser = async (_: any, { name }: any) =>
  await user
    .findOne({ name })
    .then((user: userDataInterface | null) => {
      if (!user) return { err: "no user found" };
      else {
        let { name, cover, followers, follwed } = user;

        const result = {
          name,
          cover,
          followers: followers?.length || null,
          follwed: follwed?.length || null,
        };

        return result;
      }
    })
    .catch(() => ({ err: "somthing wrong happend" }));

export const follow = async (
  _: any,
  {
    name,
    userData,
    follow,
  }: { name: string; userData: userSchemaInterface; follow: boolean }
) =>
  await user
    .findOne({ name })
    .then(async (user: userSchemaInterface | null) => {
      if (!user || name === userData.name) {
        return { err: "somthing wrogn happend" };
      }
      if (follow)
        return (
          user.followers?.push(userData._id),
          await user
            .save()
            .then(() => ({ result: "followed" }))
            .catch((err) => {
              console.log(err);

              //loging here
              return { err: "somethignwrong happend" };
            })
        );
      else
        return user
          .updateOne({ name }, { $pull: { list: userData._id } })
          .then(() => ({ result: "unfollwed" }))
          .catch((err) => {
            //loging here
            console.log(err);

            return { err: "somethignwrong happend" };
          });
    })
    .catch(() => ({ err: "somthing wrong happend" }));

export const getMessages = (
  _: any,
  { userData }: { userData: dbResultType }
) => (
  console.log("get messages"),
  msg
    .find({ usersId: userData._id })
    .then((messages: messagesResultType[] | []) => ({ messages }))
    .catch(() => ({ err: "something wrong happend" }))
);

export const getUserDetails = (
  _: any,
  { userData: { name, cover } }: { userData: dbResultType }
) => ({ cover, name });
