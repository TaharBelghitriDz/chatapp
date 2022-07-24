import { Box, Text, VStack } from "@chakra-ui/react";
import { useAnimationControls } from "framer-motion";

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
