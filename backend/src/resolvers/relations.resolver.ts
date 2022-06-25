import { user } from "../models/user.model";
import { userSchemaInterface } from "../schemas.mongo/user.mongo.schema";

export const findUser = async (_: any, { name }: any) =>
  await user
    .findOne({ name })
    .then((user: userSchemaInterface | null) => {
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
      if (!user || name === userData.name)
        return { err: "somthing wrogn happend" };

      if (follow)
        user.followers?.push(userData._id),
          user
            .save()
            .then(() => ({ result: "followed" }))
            .catch((err) => {
              //loging here
              return { err: "somethignwrong happend" };
            });
    })
    .catch(() => ({ err: "somthing wrong happend" }));
