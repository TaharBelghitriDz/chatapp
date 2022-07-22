import { Box, HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ChatNavbar = () => {
  return (
    <HStack justifyContent="space-between" w="full">
      <HStack
        as={motion.div}
        p="10px"
        rounded="20px"
        initial={{ backgroundColor: "#00000000" }}
        transition={{ duration: "0.3" }}
        whileHover={{ backgroundColor: "#cccccc" }}
        w="full"
        h="full"
        alignItems="flex-end"
        spacing="20px"
      >
        <Box h="75px" w="75px" bg="#1F1F1F" rounded="15px" />
        <Text fontSize="24px" fontWeight="bold" lineHeight="24px">
          Tahar belghitri
        </Text>
      </HStack>
      <HStack spacing="15px" alignItems="flex-end" h="full" p="10px">
        <Box w="35px" h="35px" bg="#1f1f1f" rounded="full" />
        <Box w="35px" h="35px" bg="#1f1f1f" rounded="full" />
      </HStack>
    </HStack>
  );
};

export default ChatNavbar;
