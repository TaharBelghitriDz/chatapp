import { returnedUserInterface } from "../schemas/mongo/user.mongo.schema";

interface result {
  err?: string | undefined;
  token?: string | undefined;
}
export type resolverType<args, R = result, ctx = undefined> = (
  p: any,
  args: args,
  context: ctx | any,
  info: any
) => Promise<R>;

export type GraphLoginType = resolverType<{ password: string; email: string }>;

interface signupArgs {
  password: string;
  email: string;
  name: string;
  checkPassword: string;
}

export type GraphSignUpType = resolverType<signupArgs>;

export type graphqlMiddlewreType<T> = (args: resolverType<T>[]) => Promise<T>;

export type GraphFindUserType = resolverType<
  { name: string },
  returnedUserInterface
>;

interface file {
  createReadStream: any;
  filename: any;
  mimetype: any;
  encoding: any;
}

export type uploadCoverType = resolverType<
  { file: file },
  { err?: string; result?: string }
>;
