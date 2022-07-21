import { Box, chakra, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import chakraHelper from "../../helper/chakraui.helper";

export const Story = () => (
  <VStack
    as={motion.div}
    w="90px"
    h="80%"
    textAlign="center"
    p="10px"
    rounded="10px"
    cursor="pointer"
    whileHover={{ backgroundColor: "#1F1F1F", transition: { duration: 0.1 } }}
  >
    <Image
      src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
      h="75px"
      minH="75px"
      minW="75px"
      bg="whiteAlpha.700"
      w="75px"
      rounded="30px"
    />
    <Text fontWeight="light">tahar belghitri</Text>
  </VStack>
);

export const ChatStory = () => {
  return (
    <HStack
      h="20%"
      w="400px"
      px="25px"
      rounded="20px"
      bg="#303030"
      color="#F8F8FF"
      display="flex"
      overflow="scroll"
      spacing="20px"
      css={chakraHelper.scrollBar}
    >
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </HStack>
  );
};
