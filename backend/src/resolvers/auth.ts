import { validEmail, validName } from "../helpers/userDetails.validation";
import { user } from "../models/user.model";
import { GraphLoginType, GraphSignUpType } from "../types.interfaces/resolvers";

export const signup: GraphSignUpType = async (
  _,
  { checkPassword, password, email, name }
) => {
  if (password !== checkPassword) return { err: "check the password again" };

  if (!validEmail(email)) return { err: "unvalid email " };
  if (password.length < 8 || password.length > 30)
    return { err: "unvalid password" };
  console.log("validate name " + validName(name));
  if (!validName(name)) return { err: "unvalid name" };

  const result = await user.addUser({ name, email, password });
  if (result.err) return { err: result.err };
};

export const login = async (args: any) => {
  console.log(args);
  // if(password=== )
  // if (!validEmail(email)) return { err: "unvalid email " };
  // if (password.length < 8 || password.length > 30)
  //   return { err: "unvalid password" };
  return { token: "token" };
};
