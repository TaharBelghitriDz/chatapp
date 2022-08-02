import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { applyMiddleware, IMiddleware } from "graphql-middleware";
import { checkUser } from "../../middlewares/graphql.middlewares";
import { join } from "path";
import { signup, login } from "../../resolvers/mutation/auth";
import { uploadCover } from "../../resolvers/parms.resolver";
import {
  findUser,
  follow,
  getMessages,
  getUserDetails,
} from "../../resolvers/query/relations.resolver";

const schemaLoad = loadSchemaSync(
  [join(__dirname, "./query.graphql"), join(__dirname, "./mutation.graphql")],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const Mutation = {
  signup,
  login,
  follow,
  uploadCover,
  findUser,
};

const Query = {
  getMessages,
  getUserDetails,
};

const middlewares: IMiddleware<typeof Mutation & typeof Query> = {
  Query: {
    getMessages: checkUser,
    getUserDetails: checkUser,
  },
  Mutation: {
    findUser: checkUser,
    follow: checkUser,
    uploadCover: checkUser,
  },
};

const executableSchema = addResolversToSchema({
  schema: schemaLoad,
  resolvers: { Mutation, Query },
});

const schema = applyMiddleware(executableSchema, middlewares);

export default schema;
