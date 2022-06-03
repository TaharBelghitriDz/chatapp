type NODE_ENV = "test" | "dev" | "production";

const env = process.env.NODE_ENV as NODE_ENV;

const dev = {
  app: {
    port: 5005,
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
  },
  db: {
    url: process.env.MONGOOSE_URL,
  },
  graphql: {
    graphiql: false,
  },
};

const config = {
  dev,
  test,
  production,
};
console.log(env);
export default config[env];
