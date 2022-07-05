import { IMiddlewareFunction } from "graphql-middleware";
import { tokenVrfy } from "../helpers/jwt";
import { user } from "../models/user.model";

export const checkUser: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  cntx,
  info
) => {
  try {
    const { headers } = cntx;
    console.log(headers);

    if (!headers.token) return { err: "unvalid user #1" };

    const checkToken: any = tokenVrfy(headers.token);
    delete args["token"];

    return user.findUser({ _id: checkToken.str }, async (user) => {
      if (user) {
        args.userData = user;
        return await resolve(parent, args, cntx, info);
      } else return { err: "unvalid user #2" };
    });
  } catch (err) {
    //loging here
    console.log(err);
    return { err: "unvalid user #3" };
  }
};
