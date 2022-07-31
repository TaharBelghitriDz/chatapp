import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AnimationControls, motion } from "framer-motion";
import { errorMsg } from "helper/graphql.helper";
import { useCustomToaster } from "hooks/chakra.hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loginMutation } from "schemas/mutation";

const Spam = chakra("span");

const ChakraBox = motion(Box);

export const LoginFormsUi = (props: {
  switch: AnimationControls;
  SwitcheFun: (e: "SignupFomrsUi" | "LoginFormsUi") => void;
}) => {
  const [loginState, setLogin] = useState({ email: "", password: "" });
  const [loginFun, loginDetails] = useMutation(loginMutation);
  const router = useRouter();
  const [isError, setError] = useState({ isError: "", error: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [mutationResult, setMutationResult] = useState<
    Record<string, any> | undefined
  >();

  const notification = useCustomToaster();

  useEffect(() => {
    if (typeof loginDetails.data !== "undefined")
      setMutationResult(loginDetails.data);
    else setMutationResult(undefined);
  }, [loginDetails]);

  useEffect(() => {
    if (typeof mutationResult !== "undefined") {
      const { token, err } = mutationResult.login;

      if (err) {
        const errorInfo = errorMsg(err);

        if (Array.isArray(errorInfo)) {
          setLogin((e) => ({ ...e, password: "" }));

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

  const isEmailError = isError.isError === "email";
  const isPassowrdError = isError.isError === "password";

  return (
    <ChakraBox animate={props.switch}>
      <Text fontSize="40px" fontWeight="bold">
        Login
      </Text>

      <Text fontSize="20px">
        i don’t have an acount ?{" "}
        <Spam
          color="#FF7F11"
          cursor="pointer"
          onClick={() => props.SwitcheFun("LoginFormsUi")}
        >
          signup now
        </Spam>
      </Text>
      <FormControl mt="20px" isInvalid={isEmailError}>
        <FormLabel htmlFor="email">email</FormLabel>
        <Input
          key="email"
          borderWidth="2px"
          value={loginState.email}
          onChange={({ target: { value } }) => {
            setLogin((e) => ({ ...e, email: value }));
          }}
        />
        {isEmailError && <FormErrorMessage>{isError.error}</FormErrorMessage>}
      </FormControl>

      <FormControl mt="20px" isInvalid={isPassowrdError}>
        <FormLabel htmlFor="email">password</FormLabel>
        <InputGroup>
          <Input
            key="password"
            type={showPassword ? "text" : "password"}
            borderWidth="2px"
            value={loginState.password}
            onChange={({ target: { value } }) => {
              setLogin((e) => ({ ...e, password: value }));
            }}
          />

          <InputRightElement>
            <Text
              cursor="pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              mr="10px"
            >
              {showPassword ? "Hide" : "Show"}
            </Text>
          </InputRightElement>

          {isPassowrdError && (
            <FormErrorMessage>{isError.error}</FormErrorMessage>
          )}
        </InputGroup>
      </FormControl>

      <Text mt="20px" color="orange" cursor="pointer">
        forget password ?
      </Text>
      <Button
        mt="30px"
        colorScheme="orange"
        loadingText="login"
        onClick={() => {
          loginFun({ variables: loginState });
        }}
      >
        login now
      </Button>
    </ChakraBox>
  );
};
