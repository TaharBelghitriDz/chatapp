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
