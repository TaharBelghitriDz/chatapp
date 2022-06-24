import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { join } from "path";
import { login, signup } from "../resolvers/auth";

const schemaLoad = loadSchemaSync(
  [join(__dirname, "./query.graphql"), join(__dirname, "./mutation.graphql")],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const rootValue = {
  signup,
  login,
};

const schema = addResolversToSchema({
  schema: schemaLoad,
  resolvers: { Mutation: rootValue },
});

export default schema;
