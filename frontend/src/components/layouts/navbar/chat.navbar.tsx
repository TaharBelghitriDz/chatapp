import {
  Box,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconMessageCircle, IconChevronDown } from "@tabler/icons";
import { useEffect, useState } from "react";
import Emitter from "../../../helper/state";

const ChatNavbar = () => {
  const [details, setDetails] = useState<Record<string, any> | undefined>(
    undefined
  );
  useEffect(() => {
    Emitter.on("getUserDetails", (args) => {
      console.log("args");
      console.log(args.userDetails.data.getUserDetails);

      const detai = args.userDetails.data.getUserDetails;
      setDetails(detai);
    });
  }, []);

  if (details)
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
          <Image
            src={details.cover}
            h="75px"
            w="75px"
            bg="#eeeeee"
            rounded="15px"
          />
          <Text fontSize="24px" fontWeight="bold" lineHeight="24px">
            {details.name}
          </Text>
        </HStack>
        <HStack
          spacing="5px"
          alignItems="flex-end"
          h="full"
          p="10px"
          justifyContent="start"
        >
          <Box as={IconMessageCircle} w="35px" h="35px" color="#4F86C6" />
          <Text fontSize="20px" fontWeight="bold" lineHeight="20px">
            All
          </Text>
          <Box as={IconChevronDown} w="20px" h="20px" cursor="pointer" />
        </HStack>
      </HStack>
    );
  else
    return (
      <HStack justifyContent="space-between" w="full">
        <HStack
          p="10px"
          rounded="20px"
          w="full"
          h="full"
          alignItems="flex-end"
          spacing="20px"
        >
          <Skeleton h="75px" w="75px" />
          <SkeletonText mt="30px" noOfLines={2} spacing="20px" w="80px" />
        </HStack>
      </HStack>
    );
};

export default ChatNavbar;
