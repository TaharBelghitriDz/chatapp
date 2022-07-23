import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { applyMiddleware, IMiddleware } from "graphql-middleware";
import { join } from "path";
import {
  findUser,
  follow,
  getMessages,
  getUserDetails,
} from "../resolvers/relations.resolver";
import { checkUser } from "../middlewares/graphql.middlewares";
import { uploadCover } from "../resolvers/parms.resolver";
import { login, signup } from "../resolvers/mutation/auth";

const schemaLoad = loadSchemaSync(
  [join(__dirname, "./query.graphql"), join(__dirname, "./mutation.graphql")],
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const Mutation = {
  signup,
  login,
  findUser,
  follow,
  uploadCover,
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
