import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5005/",
  cache: new InMemoryCache(),
});

export default client;
