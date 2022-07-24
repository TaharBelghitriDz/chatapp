import {
  Box,
  chakra,
  Fade,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import chakraHelper from "../../helper/chakraui.helper";
import { IconChevronDown } from "@tabler/icons";
import { IconPlus, IconArrowRight } from "@tabler/icons";

export const Story = () => (
  <VStack
    as={motion.div}
    w="90px"
    textAlign="center"
    rounded="10px"
    p="10px"
    cursor="pointer"
    initial={{ backgroundColor: "#00000000" }}
    whileHover={{ backgroundColor: "#cccccc" }}
  >
    <Image
      src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
      h="75px"
      minH="75px"
      minW="75px"
      bg="whiteAlpha.700"
      w="75px"
      rounded="15px"
    />
    <Text fontWeight="light">tahar belghitri</Text>
  </VStack>
);

export const AddStory = () => {
  const [isHoverd, setHOver] = useState(false);

  const whileHover = (hoverd: boolean) => setHOver(hoverd);

  return (
    <VStack
      as={motion.div}
      w="90px"
      textAlign="center"
      rounded="10px"
      cursor="pointer"
      onMouseEnter={() => whileHover(true)}
      onMouseLeave={() => whileHover(false)}
      pos="relative"
      m="0"
    >
      <Image
        src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
        h="75px"
        minH="75px"
        minW="75px"
        bg="whiteAlpha.700"
        w="75px"
        rounded="15px"
      />
      <Box fontWeight="light">
        add <Text />
        story
      </Box>
      <Fade in={isHoverd}>
        <Box
          as={IconPlus}
          h="30px"
          w="30px"
          p="5px"
          pos="absolute"
          color="white"
          top="0%"
          left="0%"
          bg="#4F86C6"
          rounded="10px"
        />
      </Fade>
    </VStack>
  );
};

export const ChatStory = () => {
  return (
    <VStack p="10px" pt="30px" w="inherit" pos="relative">
      <HStack spacing="20px" justifyContent="start" w="full">
        <Text fontSize="24px" fontWeight="bold">
          Story
        </Text>
        <Box
          as={IconChevronDown}
          h="30px"
          w="30px"
          cursor="pointer"
          color="#4F86C6"
        />
      </HStack>

      <HStack
        h="1OOpx"
        w="full"
        pr="25px"
        pt="10px"
        p="0"
        display="flex"
        overflow="scroll"
        spacing="20px"
        css={chakraHelper.scrollBar}
      >
        <Box
          as={IconArrowRight}
          pos="absolute"
          right="10px"
          h="40px"
          w="40px"
          p="10px"
          rounded="full"
          bg="#4F86C6"
          color="#eeeeee"
          shadow="0px 0px 10px 0px #4F86C6"
          cursor="pointer"
        />
        <AddStory />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HStack>
    </VStack>
  );
};
