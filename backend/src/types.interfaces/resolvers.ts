interface result {
  err?: string | undefined;
  token?: string | undefined;
}
export type resolverType<args, ctx = undefined, R = result> = (
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
