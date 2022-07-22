import { Box, chakra, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import chakraHelper from "../../helper/chakraui.helper";

export const Story = () => (
  <VStack
    as={motion.div}
    w="90px"
    textAlign="center"
    rounded="10px"
    p="10px"
    cursor="pointer"
    initial={{ backgroundColor: "#00000000" }}
    whileHover={{ backgroundColor: "#cccccc" }}
  >
    <Image
      src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
      h="75px"
      minH="75px"
      minW="75px"
      bg="whiteAlpha.700"
      w="75px"
      rounded="15px"
    />
    <Text fontWeight="light">tahar belghitri</Text>
  </VStack>
);

export const ChatStory = () => {
  return (
    <VStack p="10px" pt="30px" w="inherit" pos="relative">
      <HStack spacing="20px" justifyContent="start" w="full">
        <Text fontSize="24px" fontWeight="bold">
          Story
        </Text>
        <Box h="30px" w="30px" bg="gray" rounded="full" />
      </HStack>

      <HStack
        h="1OOpx"
        w="full"
        pr="25px"
        pt="10px"
        display="flex"
        overflow="scroll"
        spacing="20px"
        css={chakraHelper.scrollBar}
      >
        <Box
          pos="absolute"
          right="10px"
          h="50px"
          w="50px"
          rounded="full"
          bg="gray"
          shadow="0px 0px 10px 0px #1F1F1F"
        />
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
    </VStack>
  );
};
