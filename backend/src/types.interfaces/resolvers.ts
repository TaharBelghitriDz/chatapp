export interface resolverType<args, ctx = undefined> {
  p: any;
  args: args;
  context: ctx | any;
}

export type GraphLoginType = resolverType<{ password: string; email: string }>;

interface signupArgs {
  password: string;
  email: string;
  name: string;
  confirmPassword: string;
}
export type GraphSignUpType = resolverType<signupArgs>;
