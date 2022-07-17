import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export const Message = () => {
  return (
    <HStack width="80%" px="10px" bg="gray" justifyContent="space-between">
      <Box h="50px" w="50px" bg="purple" rounded="full" />
      <VStack
        alignItems="start"
        justifyContent="space-around"
        bg="yellow"
        spacing="0px"
      >
        <Text> Tahar belghitri </Text>
        <Text>you : yeah its fine</Text>
      </VStack>
    </HStack>
  );
};

export const ChateMessagesList = () => {
  return (
    <VStack
      height="400px"
      w="400px"
      bg="green"
      rounded="20px"
      spacing="20px"
      p="20px"
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </VStack>
  );
};
