import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const token =
  typeof localStorage !== "undefined"
    ? localStorage.getItem("token") || "none 2"
    : "none 1";

const uri = new HttpLink({
  uri: "http://localhost:5005/",
  headers: {
    auth: Date.now(),
    token: (console.log("token  => " + token), token),
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.log("graphql error");

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

console.log(token);

const defaultOptions: DefaultOptions = {};

const client = new ApolloClient({
  link: from([errorLink, uri]),
  ssrMode: true,
  cache: new InMemoryCache({ resultCaching: false }),
  credentials: "include",
  defaultOptions,
});

export default client;
