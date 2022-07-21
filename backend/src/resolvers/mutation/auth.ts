import { tokenSign } from "../../helpers/jwt";
import { validEmail, validName } from "../../helpers/userDetails.validation";
import { user } from "../../models/user.model";
import {
  GraphLoginType,
  GraphSignUpType,
} from "../../types.interfaces/resolvers.types";

export const signup: GraphSignUpType = async (
  _,
  { checkPassword, password, email, name }
) => {
  if (password !== checkPassword)
    return { err: "password.check the password again" };

  if (!validEmail(email)) return { err: "email.unvalid email " };

  if (password.length < 8 || password.length > 30)
    return { err: "password.check your  password" };

  if (!validName(name)) return { err: "name.name unvalid name" };

  return user.findUser({ $or: [{ name }, { email }] }, (result) => {
    if (result)
      return {
        err:
          (result.name === name ? "name.name" : "email.email") +
          " already used",
      };

    return user.addUser({ name, email, password });
  });
};

export const login: GraphLoginType = async (_, { email, password }) => {
  if (!validEmail(email)) return { err: "email.unvalid email " };

  if (password.length < 8 || password.length > 30)
    return { err: "password.unvalid password" };

  return user.findUser({ email }, (result) => {
    if (result) return { token: tokenSign(result._id) };
    else return { err: "email.unvalid email" };
  });
};
