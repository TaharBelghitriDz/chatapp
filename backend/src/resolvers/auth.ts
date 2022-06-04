import { GraphLoginType } from "../types.interfaces/resolvers";

const signup = async ({ args: { email, password } }: GraphLoginType) => {
  return { token: "token" };
};
