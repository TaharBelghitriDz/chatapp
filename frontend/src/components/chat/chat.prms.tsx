import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChatMenu = () => (
  <HStack
    h="100px"
    w="100%"
    rounded="20px"
    bg="#303030"
    p="20px"
    justifyContent="space-between"
  >
    <HStack
      as={motion.div}
      w="auto"
      p="15px"
      rounded="15px"
      whileHover={{ backgroundColor: "#1F1F1F", transition: { duration: 0.1 } }}
      spacing="20px"
    >
      <Box height="50px" rounded="full" w="50px" bg="red" />
      <Text color="white" fontWeight="bold">
        Tahar belghitri
      </Text>
    </HStack>
    <HStack spacing="20px">
      <Box height="40px" rounded="full" w="40px" bg="red" />
      <Box height="40px" rounded="full" w="40px" bg="red" />
    </HStack>
  </HStack>
);

export const ChatPrms = () => {
  return (
    <VStack
      h="inherit"
      w="400px"
      spacing="20px"
      bg="whiter"
      color="whiter"
      cursor="pointer"
    >
      <ChatMenu />
      <Box w="100%" h="calc(100% - 100px)" rounded="20px" bg="#303030">
        hi
      </Box>
    </VStack>
  );
};
