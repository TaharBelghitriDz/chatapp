import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChatSearch } from "./chat.search";

const SingleMessage = () => (
  <HStack
    as={motion.div}
    width="80%"
    px="10px"
    w="full"
    justifyContent="space-between"
    alignItems="flex-end"
    h="50xp"
    cursor="pointer"
    rounded="15px"
    p="10px"
    fontSize="20px"
    whileHover={{ backgroundColor: "#cccccc" }}
  >
    <Box h="50px" w="50px" bg="gray" rounded="15px" />
    <HStack w="calc(100% - 70px)" justifyContent="space-between">
      <VStack alignItems="start" spacing="10px" lineHeight="15px">
        <Text fontWeight="bold"> Tahar belghitri </Text>
        <Text fontWeight="light">you : yeah its fine</Text>
      </VStack>
      <HStack spacing="10px">
        <Box h="25px" w="25px" bg="gray" rounded="full" />
        <Box h="25px" w="25px" bg="gray" rounded="full" />
      </HStack>
    </HStack>
  </HStack>
);

export const Message = () => {
  return (
    <VStack pt="20px" p="10px" w="full" alignItems="flex-start">
      <Text fontSize="24px" fontWeight="bold">
        Messages
      </Text>
      <ChatSearch />
      <Divider h="20px" />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
    </VStack>
  );
};
