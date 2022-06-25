import { config } from "dotenv";
config({ path: "./.env" });

type NODE_ENV = "test" | "dev" | "production";

// i case you didn't setup dotenv file it's gonna work in dev mode
const env =
  (process.env.NODE_ENV as NODE_ENV) || (console.log("dev mode"), "dev");

const dev = {
  app: {
    port: 5005,
    SECRETKEY: "azertyuiop",
  },
  db: {
    url: "mongodb://localhost:27017/chatapp",
  },
  graphql: {
    graphiql: true,
  },
};
const test = {
  app: {
    port: process.env.PORT,
    SECRETKEY: process.env.SECRETKEY,
  },
  db: {
    url: process.env.MONGOOSE_URL,
  },
  graphql: {
    graphiql: true,
  },
};

const production = {
  app: {
    port: process.env.PORT,
    SECRETKEY: process.env.SECRETKEY,
  },
  db: {
    url: process.env.MONGOOSE_URL,
  },
  graphql: {
    graphiql: false,
  },
};

const configs = {
  dev,
  test,
  production,
};

export default configs[env];
