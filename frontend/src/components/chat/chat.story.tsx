import { Box, chakra, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import chakraHelper from "../../helper/chakraui.helper";

export const Story = () => (
  <VStack
    as={motion.div}
    w="75px"
    h="130px"
    textAlign="center"
    p="10px"
    rounded="10px"
    cursor="pointer"
    whileHover={{ backgroundColor: "#1F1F1F", transition: { duration: 0.1 } }}
  >
    <Image
      src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
      h="75px"
      bg="whiteAlpha.700"
      w="75px"
      rounded="100px"
      border="5px solid white"
    />
    <Text fontWeight="light">tahar belghitri</Text>
  </VStack>
);

export const ChatStory = () => {
  return (
    <HStack
      h="150px"
      w="400px"
      bg="green"
      px="25px"
      rounded="20px"
      bgColor="#303030"
      color="#F8F8FF"
      display="flex"
      overflow="scroll"
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
