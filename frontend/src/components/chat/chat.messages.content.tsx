import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const ChatHeader = () => {
  return (
    <HStack
      w="100%"
      h="100px"
      bg="#303030"
      rounded="20px"
      px="20px"
      justifyContent="space-between"
    >
      <Box h="75px" w="75px" bg="#ffffff" rounded="20px" />
      <Text>hi</Text>
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
      rounded="15px"
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
