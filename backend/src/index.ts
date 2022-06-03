import express from "express";
import helmet from "helmet";
import cors from "cors";
import "./config/mongo.config";
import { graphqlHTTP } from "express-graphql";
import { notFoundError, reqErrHandler } from "./middlewares/reqErorHandler";
import config from "./config";
import { buildSchema } from "graphql";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "path";
const app = express();

app.use(helmet());
app.use(cors());

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return "Hello world!";
  },
};

const typeDefs = loadSchemaSync(
  join(__dirname, "./schemas.graphql/query.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

app.use(
  "*",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: config.graphql.graphiql,
  })
);

app.use(notFoundError);
app.use(reqErrHandler);

export default app;
