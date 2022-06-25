import { IMiddlewareFunction } from "graphql-middleware";
import { tokenVrfy } from "../helpers/jwt";
import { user } from "../models/user.model";

export const checkUser: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  context,
  info
) => {
  try {
    const checkToken: any = tokenVrfy(args.token);
    delete args["token"];
    return user.findUser({ _id: checkToken.str }, async (user) => {
      if (user) {
        args.userData = user;
        return await resolve(parent, args, context, info);
      } else return { err: "unvalid user" };
    });
  } catch {
    //loging here
    return { err: "unvalid user" };
  }
};
