import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import chakraHelper from "../../helper/chakraui.helper";

export const Message = () => {
  return (
    <HStack
      as={motion.div}
      width="80%"
      px="10px"
      bg="#383838"
      w="100%"
      justifyContent="space-between"
      h="50xp"
      cursor="pointer"
      rounded="10px"
      p="10px"
      whileHover={{ backgroundColor: "#494949" }}
    >
      <Box h="50px" w="50px" bg="purple" rounded="full" />
      <HStack h="50px" w="calc(100% - 70px)" justifyContent="space-between">
        <VStack
          alignItems="start"
          justifyContent="space-around"
          spacing="0px"
          h="40px"
        >
          <Text fontWeight="bold"> Tahar belghitri </Text>
          <Text fontWeight="light">you : yeah its fine</Text>
        </VStack>
        <Text>hi</Text>
      </HStack>
    </HStack>
  );
};

export const ChateMessagesList = () => {
  return (
    <VStack
      h="calc(80% - 20px)"
      w="400px"
      bg="#303030"
      rounded="20px"
      spacing="15px"
      p="15px"
      alignItems="start"
      overflow="scroll"
      css={chakraHelper.scrollBar}
      color="#F8F8FF"
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </VStack>
  );
};
