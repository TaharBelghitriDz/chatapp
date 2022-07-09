import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../../config/graphql";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
