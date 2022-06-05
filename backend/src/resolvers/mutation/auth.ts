import { validEmail, validName } from "../../helpers/userDetails.validation";
import { user } from "../../models/user.model";
import { GraphSignUpType } from "../../types.interfaces/resolvers";
import jwt from "jsonwebtoken";

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

  return user
    .addUser({ name, email, password })
    .then((result: any) => ({
      token: jwt.sign({ _id: result._id }, `${result._id}`),
    }))
    .catch(
      (err: any) => (
        console.log(err), { err: "somthing wrong happend pleas try again" }
      )
    );
};

export const login = async (args: any) => {
  console.log(args);
  // if(password=== )
  // if (!validEmail(email)) return { err: "unvalid email " };
  // if (password.length < 8 || password.length > 30)
  //   return { err: "unvalid password" };
  return { token: "token" };
};
