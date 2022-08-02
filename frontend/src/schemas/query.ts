import { gql } from "@apollo/client";

export const getMessages = {
  errorPolicy: "ignore",
  fetchPolicy: "ignore",
  query: gql`
    query user {
      getMessages {
        err
        messages {
          _id
        }
      }
    }
  `,
};

export const getUserDetails = {
  errorPolicy: "ignore",
  fetchPolicy: "ignore",
  query: gql`
    query users {
      getUserDetails {
        err
        name
        cover
      }
    }
  `,
};

export const findUser = {
  errorPolicy: "ignore",
  fetchPolicy: "ignore",
  query: gql`
    query users {
      findUser(name: "tahar bel") {
        err
        cover
        name
      }
    }
  `,
};
