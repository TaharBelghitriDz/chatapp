import dotenv from "dotenv";
dotenv.config();

type NODE_ENV = "test" | "dev" | "production";

const env =
  (console.log("mood " + process.env.NODE_ENV),
  (process.env.NODE_ENV as NODE_ENV) || "dev");

console.log("env " + env);

const dev = {
  app: {
    port: 5005,
    SECRETKEY: "azertyuiop",
  },
  db: {
    url: "mongodb://localhost:27017/chatappdev",
  },
  graphql: {
    graphiql: true,
  },
};
const test = {
  app: {
    port: process.env.PORT,
    SECRETKEY: process.env.SECRETKEY as string,
  },
  db: {
    url: process.env.MONGOOSE_URL as string,
  },
  graphql: {
    graphiql: true,
  },
};

const production = {
  app: {
    port: process.env.PORT,
    SECRETKEY: process.env.SECRETKEY as string,
  },
  db: {
    url: process.env.MONGOOSE_URL as string,
  },
  graphql: {
    graphiql: false,
  },
};

const configs: Record<NODE_ENV, any> = {
  dev,
  test,
  production,
};

export default configs[env];
