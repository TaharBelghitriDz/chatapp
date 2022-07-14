import {
  Box,
  Button,
  chakra,
  ChakraProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {
  AnimationControls,
  HTMLMotionProps,
  motion,
  useAnimationControls,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ReactHTML, ReactNode } from "react";
import { loginMutation, signupMutation } from "../shcemas/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const LoginInfos = () => {
  return (
    <VStack
      justifyContent="space-between"
      pl="5vw"
      pt="100px"
      alignItems="start"
      bg="#E3E3E3"
    >
      <Text
        fontSize="64px"
        w="450px"
        fontFamily="heading"
        fontWeight="bold"
        lineHeight="60px"
      >
        the best community we deserve
      </Text>
      <Text w="400px" py="50px">
        we take the report we take so seriosly ... and give our users fast reply
        to their problems so w’ll be in touch with the all the time
      </Text>
      <Box h="40vh" w="50vw" bg="grey" />
    </VStack>
  );
};
const Spam = chakra("span");

const preChakraMotin =
  (tag: keyof ReactHTML = "div") =>
  (
    args: HTMLMotionProps<typeof tag> & ChakraProps & { children: ReactNode }
  ) => {
    const ChakraComp = chakra(tag);
    const Motione = motion(ChakraComp);
    return <Motione {...args} />;
  };

const ChakraMotion = preChakraMotin();

let errorMsg = (str: string): string[] | string => {
  if (str.split(".").length > 0) return str.split(".");
  else return str;
};

const LoginFormsUi = (props: {
  switch: AnimationControls;
  SwitcheFun: (e: "SignupFomrsUi" | "LoginFormsUi") => void;
}) => {
  const [loginState, setLogin] = useState({ email: "", password: "" });
  const [loginFun, loginDetails] = useMutation(loginMutation);
  const router = useRouter();
  const [isError, setError] = useState({ isError: "", error: "" });
  const toast = useToast();
  const [mutationResult, setMutationResult] = useState<
    Record<string, any> | undefined
  >();

  console.log("components render");

  const notification = (title: string, description: string) =>
    toast({
      title,
      description,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

  useEffect(() => {
    if (typeof loginDetails.data !== "undefined")
      setMutationResult(loginDetails.data);
    else setMutationResult(undefined);
  }, [loginDetails]);

  useEffect(() => {
    console.log("use effect login details");
    if (typeof mutationResult !== "undefined") {
      const { token, err } = mutationResult.login;
      console.log(loginState);

      if (err) {
        const errorInfo = errorMsg(err);
        if (Array.isArray(errorInfo)) {
          setLogin((e) => ({ ...e, password: "" }));
          setError({ isError: errorInfo[0], error: errorInfo[1] });
          console.log(loginState);
        } else {
          console.log(errorInfo);
          notification("error", errorInfo as string);
        }
      } else {
        console.log("token / " + token);
        localStorage.setItem("token", token);
        console.log(localStorage.getItem("token"));
        router.push("/chat");
      }
    }
  }, [mutationResult]);

  const isEmailError = isError.isError === "email";

  return (
    <ChakraMotion animate={props.switch}>
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
        {isEmailError && <FormHelperText>{isError.error}</FormHelperText>}
      </FormControl>

      <FormControl mt="20px">
        <FormLabel htmlFor="email">password</FormLabel>
        <Input
          key="password"
          borderWidth="2px"
          value={loginState.password}
          onChange={({ target: { value } }) => {
            setLogin((e) => ({ ...e, password: value }));
          }}
        />
        <FormErrorMessage>password is required.</FormErrorMessage>
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
    </ChakraMotion>
  );
};

const SignupFomrsUi = (props: {
  switch: AnimationControls;
  SwitcheFun: (e: "SignupFomrsUi" | "LoginFormsUi") => void;
}) => {
  const [signupState, setSignUpState] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const router = useRouter();

  const [signupFun, signupDetails] = useMutation(signupMutation);

  if (typeof signupDetails.data !== "undefined") {
    const { token, err } = signupDetails.data.signup;
    if (err) return <div>{err}</div>;
    console.log("token / " + token);
    localStorage.setItem("token", token);
    console.log(localStorage.getItem("token"));
    router.push("/chat");
  }

  return (
    <ChakraMotion animate={props.switch} display="none" opacity="0">
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

      <FormControl mt="20px">
        <FormLabel htmlFor="email">email</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.email}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, email: value }));
          }}
        />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>

      <FormControl mt="20px">
        <FormLabel htmlFor="email">name</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.name}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, name: value }));
          }}
        />
        <FormErrorMessage>name is required.</FormErrorMessage>
      </FormControl>

      <FormControl mt="20px">
        <FormLabel htmlFor="email">password</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.password}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, password: value }));
          }}
        />
        <FormErrorMessage>password is required.</FormErrorMessage>
      </FormControl>

      <FormControl mt="20px">
        <FormLabel htmlFor="email">confirm password</FormLabel>
        <Input
          borderWidth="2px"
          value={signupState.checkPassword}
          onChange={({ target: { value } }) => {
            setSignUpState((e) => ({ ...e, checkPassword: value }));
          }}
        />
        <FormErrorMessage>confirm password is required.</FormErrorMessage>
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
    </ChakraMotion>
  );
};

export const LoginForms = () => {
  const switcher = async (name: keyof typeof AnimationContorollersHooks) => {
    await AnimationContorollersHooks[name].start({ opacity: 0 });
    AnimationContorollersHooks[name].start({ display: "none" });

    const UnDisplay =
      "LoginFormsUi" === name ? "SignupFomrsUi" : "LoginFormsUi";

    AnimationContorollersHooks[UnDisplay].start({ display: "block" });
    AnimationContorollersHooks[UnDisplay].start({ opacity: 1 });
  };

  const AnimationContorollersHooks = {
    SignupFomrsUi: useAnimationControls(),
    LoginFormsUi: useAnimationControls(),
  };

  return (
    <VStack
      justifyContent="space-between"
      w="50vw"
      pl="5vw"
      alignItems="start"
      pos="relative"
      pt="100px"
      h="auto"
    >
      <LoginFormsUi
        SwitcheFun={switcher}
        switch={AnimationContorollersHooks.LoginFormsUi}
      />
      <SignupFomrsUi
        SwitcheFun={switcher}
        switch={AnimationContorollersHooks.SignupFomrsUi}
      />
    </VStack>
  );
};
