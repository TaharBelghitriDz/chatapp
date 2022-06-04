import { validEmail, validName } from "../helpers/userDetails.validation";
import { GraphLoginType, GraphSignUpType } from "../types.interfaces/resolvers";

export const signupResolver: GraphSignUpType = async (
  _,
  __,
  { checkPassword, password, email, name }
) => {
  if (password === checkPassword) return { err: "check the password again" };
  if (!validEmail(email)) return { err: "unvalid email " };
  if (password.length < 8 || password.length > 30)
    return { err: "unvalid password" };
  if (!validName(name)) return { err: "unvalid name" };
  console.log(name + password + checkPassword + email);
  return { token: "valid" };
};

export const loginResolver: GraphLoginType = async (
  _,
  __,
  { email, password }
) => {
  // if(password=== )
  if (!validEmail(email)) return { err: "unvalid email " };
  if (password.length < 8 || password.length > 30)
    return { err: "unvalid password" };
  return { token: "token" };
};
