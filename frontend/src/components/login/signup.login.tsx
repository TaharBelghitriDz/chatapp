import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { AnimationControls, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { errorMsg } from "../../helper/graphql.helper";
import { useCustomToaster } from "../../hooks/chakra.hooks";
import { signupMutation } from "../../shcemas/mutation";

const Spam = chakra("span");
const ChakraBox = motion(Box);

export const SignupFomrsUi = (props: {
  switch: AnimationControls;
  SwitcheFun: (e: "SignupFomrsUi" | "LoginFormsUi") => void;
}) => {
  const [isError, setError] = useState({ isError: "", error: "" });
  const [mutationResult, setMutationResult] = useState<
    Record<string, any> | undefined
  >();
  const [signupState, setSignUpState] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const router = useRouter();
  const [signupFun, signupDetails] = useMutation(signupMutation);

  const notification = useCustomToaster();

  useEffect(() => {
    if (typeof signupDetails.data !== "undefined")
      setMutationResult(signupDetails.data);
    else setMutationResult(undefined);
  }, [signupDetails]);

  useEffect(() => {
    if (typeof mutationResult !== "undefined") {
      const { token, err } = mutationResult.signup;

      if (err) {
        const errorInfo = errorMsg(err);

        if (Array.isArray(errorInfo)) {
          setSignUpState((e) => ({ ...e, password: "", checkPassword: "" }));
          console.log(errorInfo);

          setError({ isError: errorInfo[0], error: errorInfo[1] });
        } else
          notification({
            title: "error",
            status: "error",
            description: errorInfo,
          });
      } else {
        localStorage.setItem("token", token);

        router.push("/chat");

        notification({
          status: "success",
          description: "welcome back",
          title: "login",
        });
      }
    }
  }, [mutationResult]);

  return (
    <ChakraBox animate={props.switch} display="none" opacity="0">
      <Text fontSize="40px" fontWeight="bold">
        Signup
      </Text>

      <Text fontSize="20px">
        you already have an acount ?{" "}
        <Spam
          color="#FF7F11"
          cursor="pointer"
          onClick={() => props.SwitcheFun("SignupFomrsUi")}
        >
          login now
        </Spam>
      </Text>

      <FormControl mt="20px" isInvalid={isError.isError === "email"}>
        <FormLabel htmlFor="email">email</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.email}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, email: value }));
          }}
        />
        {isError.isError === "email" && (
          <FormErrorMessage>{isError.error}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt="20px" isInvalid={isError.isError === "name"}>
        <FormLabel htmlFor="email">name</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.name}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, name: value }));
          }}
        />
        {isError.isError === "name" && (
          <FormErrorMessage>{isError.error}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt="20px" isInvalid={isError.isError === "password"}>
        <FormLabel htmlFor="email">password</FormLabel>
        <Input
          type="password"
          borderWidth="2px"
          value={signupState.password}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, password: value }));
          }}
        />
        {isError.isError === "password" && (
          <FormErrorMessage>{isError.error}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mt="20px" isInvalid={isError.isError === "passord"}>
        <FormLabel htmlFor="email">confirm password</FormLabel>
        <Input
          type="password"
          borderWidth="2px"
          value={signupState.checkPassword}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, checkPassword: value }));
          }}
        />
        {isError.isError === "password" && (
          <FormErrorMessage>{isError.error}</FormErrorMessage>
        )}
      </FormControl>

      <Text
        mt="20px"
        color="orange"
        cursor="pointer"
        onClick={() => props.SwitcheFun("SignupFomrsUi")}
      >
        you already have an acount ?
      </Text>

      <Button
        mt="30px"
        colorScheme="orange"
        loadingText="login"
        onClick={() => {
          signupFun({ variables: signupState });
        }}
      >
        signup now
      </Button>
    </ChakraBox>
  );
};
