import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      err
      token
    }
  }
`;

export const signupMutation = gql`
  mutation signup(
    $name: String
    $email: String
    $password: String
    $checkPassword: String
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      checkPassword: $checkPassword
    ) {
      err
      token
    }
  }
`;
