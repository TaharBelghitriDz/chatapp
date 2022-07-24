import {
  Box,
  HStack,
  Text,
  Textarea,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import chakraHelper from "../../helper/chakraui.helper";
import { IconSend, IconFilePlus } from "@tabler/icons";

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
  const [isWriting, setWriting] = useState(false);
  const heightController = useAnimationControls();
  const ref = useRef(null);
  useOutsideClick({
    ref,
    handler() {
      heightController.start({ backgroundColor: "rgb(250,250,250,0%)" });
      setWriting(false);
    },
  });

  const setBackground = () => {
    if (isWriting)
      heightController.start({ backgroundColor: "rgb(250,250,250,100%)" });
    else heightController.start({ backgroundColor: "rgb(250,250,250,100%)" });

    setWriting(!isWriting);
  };

  return (
    <HStack
      ref={ref}
      pos="absolute"
      bottom="3%"
      w="full"
      bg="rgb(250,250,250,50%)"
      h="100px"
      rounded="20px"
      backdropFilter="blur(10px)"
      border="solid 1px #cccccc"
      fontSize="20px"
      justifyContent="space-between"
      px="20px"
    >
      <Textarea
        as={motion.textarea}
        resize={"none"}
        w="80%"
        h="3Opx"
        rows={1}
        focusBorderColor="none"
        animate={heightController}
        variant="flushed"
        border="none"
        fontSize="20px"
        placeholder="write you text here"
        color="#000000"
        onClick={() => setBackground()}
        overflow="scroll"
        bg="rgb(238,238,238,0%)"
        p="10px"
        outline="none"
        rounded="10px"
        _placeholder={{ color: "#000000" }}
        onChange={() =>
          heightController.start({ backgroundColor: "rgb(250,250,250,100%)" })
        }
        css={chakraHelper.scrollBar}
      />
      <Box
        as={IconFilePlus}
        h="30px"
        w="30px"
        rounded="full"
        cursor="pointer"
      />
      <Box
        as={IconSend}
        h="40px"
        w="40px"
        color="#fafafa"
        cursor="pointer"
        p="7px"
        rounded="5px"
        bg="#4F86C6"
      />
    </HStack>
  );
};

const ChatMessagesText = (props: { other: boolean }) => {
  return (
    <HStack
      w="full"
      alignItems="flex-start"
      flexDirection={props.other ? "row-reverse" : "row"}
      pr="10px"
    >
      <Box h="50px" w="50px" bg="gray" rounded="10px" ml="10px" />
      <Text
        maxW="400px"
        minH="50px"
        fontSize="20px"
        p="15px"
        bg={props.other ? "#C4D4E8" : "#cccccc"}
        rounded="15px"
      >
        hi its tahar and hi its tahar and hi its tahar and hi its tahar and hi
        hi its tahar and hi its tahar and hi its tahar and hi its tahar and its
        hi its tahar and hi its tahar and hi its tahar and hi its tahar and hi
        hi its tahar and hi its tahar and its tahar and hi its tahar and tahar
        and
      </Text>
    </HStack>
  );
};

const ChatMessages = () => {
  return (
    <VStack
      h="calc(100% - 120px)"
      w="full"
      overflow="scroll"
      css={chakraHelper.scrollBar}
      pb="200px"
      spacing="30px"
    >
      <ChatMessagesText other={false} />
      <ChatMessagesText other={false} />
      <ChatMessagesText other={false} />
      <ChatMessagesText other={false} />
      <ChatMessagesText other={false} />
      <ChatMessagesText other={false} />
      <ChatMessagesText other={true} />
    </VStack>
  );
};

export const ChatContent = () => {
  return (
    <VStack w="700px" spacing="20px" h="inherit" position="relative">
      <ChatHeader />
      <MessageInput />
      <ChatMessages />
    </VStack>
  );
};
