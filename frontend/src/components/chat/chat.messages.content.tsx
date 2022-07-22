import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const ChatHeader = () => {
  return (
    <HStack
      w="100%"
      h="100px"
      p="10px"
      justifyContent="space-between"
      alignItems="end"
    >
      <HStack alignItems="end" spacing="20px">
        <Box h="50px" w="50px" bg="#1F1F1F" rounded="10px" />
        <Box fontSize="20px" fontWeight="bold" lineHeight="22px">
          tahar
          <Text /> belghitri
        </Box>
      </HStack>
      <HStack spacing="20px">
        <Box h="30px" w="30px" bg="#1F1F1F" rounded="full" />
        <Box h="30px" w="30px" bg="#1F1F1F" rounded="full" />
        <Box h="30px" w="30px" bg="#1F1F1F" rounded="full" />
        <Box h="30px" w="30px" bg="#1F1F1F" rounded="full" />
      </HStack>
    </HStack>
  );
};

const MessageInput = () => {
  return (
    <Box
      pos="absolute"
      bottom="3%"
      w="90%"
      left="5%"
      bg="red"
      h="100px"
      rounded="20px"
    ></Box>
  );
};

const ChatMessages = () => {
  return (
    <Box
      h="calc(100% - 120px)"
      bg="#303030"
      w="full"
      rounded="20px"
      position="relative"
    >
      <MessageInput />
    </Box>
  );
};

export const ChatContent = () => {
  return (
    <VStack w="50vw" spacing="20px" h="inherit">
      <ChatHeader />
      <ChatMessages />
    </VStack>
  );
};
