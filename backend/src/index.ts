import express from "express";
import helmet from "helmet";
import cors from "cors";
import "./config/mongo.config";
import { graphqlHTTP } from "express-graphql";
import { notFoundError, reqErrHandler } from "./middlewares/reqErorHandler";
import config from "./config";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "path";
import resolvers from "./resolvers";
import { addResolversToSchema } from "@graphql-tools/schema";
const app = express();

app.use(helmet());
app.use(cors());

const schema = loadSchemaSync(
  [
    join(__dirname, "./schemas.graphql/query.graphql"),
    join(__dirname, "./schemas.graphql/mutation.graphql"),
  ],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

app.use(
  "*",
  graphqlHTTP({
    schema: addResolversToSchema({
      schema,
      resolvers,
    }),
    graphiql: config.graphql.graphiql,
  })
);

app.use(notFoundError);
app.use(reqErrHandler);

export default app;
