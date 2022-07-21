import { gql, useMutation } from "@apollo/client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoginForms, LoginInfos } from "../components/login/index.login";
import { loginMutation, signupMutation } from "../shcemas/mutation";
import { getMessages } from "../shcemas/query";

const login: NextComponentType = () => {
  // const [loginState, setLogin] = useState({ email: "", password: "" });
  // const [signupState, setSighnup] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   checkPassword: "",
  // });
  const router = useRouter();

  // const [loginFun, loginDetails] = useMutation(loginMutation);
  // const [signupFun, signupDetails] = useMutation(signupMutation);

  console.log("render the components");
  // console.log(loginDetails.data);

  // useEffect(() => {
  //   console.log("use effect called");
  // }, []);

  // if (typeof loginDetails.data !== "undefined") {
  //   const { token, err } = loginDetails.data.login;
  //   if (err) return <div>{err}</div>;
  //   console.log("token / " + token);
  //   localStorage.setItem("token", token);
  //   console.log(localStorage.getItem("token"));
  //   router.push("/chat");
  // }

  // if (typeof signupDetails.data !== "undefined") {
  //   const { token, err } = signupDetails.data.signup;
  //   if (err) return <div>{err}</div>;
  //   console.log("token / " + token);
  //   localStorage.setItem("token", token);
  //   console.log(localStorage.getItem("token"));
  //   router.push("/chat");
  // }

  return (
    <HStack justifyContent="space-between" w="100%" h="100vh">
      shshshshshhhshshhshs
      <LoginInfos />
      <LoginForms />
    </HStack>
  );
};

export default login;
