import { Box, VStack } from "@chakra-ui/react";
import chakraHelper from "../../helper/chakraui.helper";
import ChatNavbar from "../layouts/navbar/chat.navbar";
import { ChatStory } from "./chat.story";
import { Message } from "./message";

export const ChateMessagesList = () => {
  return (
    <VStack
      maxW="400px"
      w="400px"
      h="100%"
      borderRight="solid 1px #B0B0B0"
      p="10px"
      pt="10px"
      alignItems="start"
    >
      <ChatNavbar />
      <Box
        pr="10px"
        w="inherit"
        h="inherit"
        overflow="scroll"
        css={chakraHelper.scrollBar}
      >
        <ChatStory />
        <Message />
      </Box>
    </VStack>
  );
};
