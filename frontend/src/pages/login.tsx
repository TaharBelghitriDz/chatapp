import { gql, useMutation } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loginMutation, signupMutation } from "../shcemas/mutation";
import { getMessages } from "../shcemas/query";

const login: NextComponentType = () => {
  const [loginState, setLogin] = useState({ email: "", password: "" });
  const [signupState, setSighnup] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });
  const router = useRouter();

  const [loginFun, loginDetails] = useMutation(loginMutation);
  const [signupFun, signupDetails] = useMutation(signupMutation);

  console.log("render the components");
  console.log(loginDetails.data);

  useEffect(() => {
    console.log("use effect called");
  }, []);

  if (typeof loginDetails.data !== "undefined") {
    const { token, err } = loginDetails.data.login;
    if (err) return <div>{err}</div>;
    console.log("token / " + token);
    localStorage.setItem("token", token);
    console.log(localStorage.getItem("token"));
    router.push("/chat");
  }

  if (typeof signupDetails.data !== "undefined") {
    const { token, err } = signupDetails.data.signup;
    if (err) return <div>{err}</div>;
    console.log("token / " + token);
    localStorage.setItem("token", token);
    console.log(localStorage.getItem("token"));
    router.push("/chat");
  }

  if (loginDetails.loading) return <div>loading</div>;
  else
    return (
      <div>
        <Flex
          flexDir="row"
          bg="gray"
          p="20px"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <span
            onClick={() => {
              console.log(loginState);
              loginFun({ variables: loginState });
            }}
          >
            login
          </span>
          <input
            placeholder="email"
            value={loginState.email}
            onChange={({ target: { value } }) =>
              setLogin((e) => ({ ...e, email: value }))
            }
          />
          <input
            placeholder="password"
            value={loginState.password}
            onChange={({ target: { value } }) =>
              setLogin((e) => ({ ...e, password: value }))
            }
          />
        </Flex>
        <Flex
          flexDir="row"
          bg="gray.100"
          p="20px"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <div
            onClick={() => {
              signupFun({ variables: signupState });
            }}
          >
            signup
          </div>
          <input
            placeholder="name"
            value={signupState.name}
            onChange={({ target: { value } }) =>
              setSighnup((e) => ({ ...e, name: value }))
            }
          />
          <input
            placeholder="email"
            value={signupState.email}
            onChange={({ target: { value } }) =>
              setSighnup((e) => ({ ...e, email: value }))
            }
          />
          <input
            placeholder="password"
            value={signupState.password}
            onChange={({ target: { value } }) =>
              setSighnup((e) => ({ ...e, password: value }))
            }
          />
          <input
            placeholder="confirm password"
            value={signupState.checkPassword}
            onChange={({ target: { value } }) =>
              setSighnup((e) => ({ ...e, checkPassword: value }))
            }
          />
        </Flex>
      </div>
    );
};

export default login;
