import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

export const ChatPrms = () => {
  return (
    <VStack
      h="full"
      w="400px"
      spacing="20px"
      alignItems="flex-start"
      pl="10px"
      borderLeft="solid 1px #B0B0B0"
      fontSize="20px"
    >
      <HStack alignItems="flex-end" h="100px">
        <Text fontSize="24px" w="full" fontWeight="bold">
          chat details
        </Text>
      </HStack>
      <HStack spacing="20px" cursor="pointer">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text>profile</Text>
      </HStack>
      <HStack spacing="20px" cursor="pointer">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text>emojis</Text>
      </HStack>
      <HStack spacing="20px" cursor="pointer">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text>nickname</Text>
      </HStack>
      <HStack spacing="20px" cursor="pointer">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text>seach in converstation</Text>
      </HStack>
      <HStack spacing="20px" cursor="pointer">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text fontWeight="bold" fontSize="22px">
          media
        </Text>
      </HStack>
      <Box
        display="flex"
        justifyContent="center"
        pos="relative"
        w="full"
        h="200px"
        bg="gray.400"
        rounded="20px"
      >
        <Button pos="absolute" backgroundColor="#EEEEEE" bottom="20px">
          see more
        </Button>
      </Box>
      <HStack spacing="20px" cursor="pointer" pt="30px">
        <Box w="25px" h="25px" bg="gray" rounded="full" />
        <Text fontWeight="bold" fontSize="22px">
          block
        </Text>
      </HStack>
    </VStack>
  );
};
