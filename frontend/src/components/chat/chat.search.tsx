import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export const ChatSearch = () => {
  return (
    <HStack
      p="10px"
      pos="relative"
      top="10px"
      rounded="10px"
      h="50px"
      w="full"
      bg="#AA93DC"
      spacing="10px"
    >
      <Box h="25px" w="25px" bg="gray" rounded="full" />
      <Text fontSize="20px" color="#EEEEEE">
        search
      </Text>
    </HStack>
  );
};
