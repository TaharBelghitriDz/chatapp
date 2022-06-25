import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { applyMiddleware, IMiddleware } from "graphql-middleware";
import { join } from "path";
import { login, signup } from "../resolvers/auth";
import { findUser, follow } from "../resolvers/relations.resolver";
import { checkUser } from "../middlewares/graphql.middlewares";

const schemaLoad = loadSchemaSync(
  [join(__dirname, "./query.graphql"), join(__dirname, "./mutation.graphql")],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const resolver = {
  signup,
  login,
  findUser,
  follow,
};

const middlewares: IMiddleware<typeof resolver> = {
  Mutation: {
    findUser: checkUser,
    follow: checkUser,
  },
};

const executableSchema = (rootValue: object) =>
  addResolversToSchema({
    schema: schemaLoad,
    resolvers: { Mutation: rootValue },
  });

const schema = applyMiddleware(executableSchema(resolver), middlewares);

export default schema;
