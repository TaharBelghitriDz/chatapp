import {
  Box,
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonText,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IconUserSearch } from "@tabler/icons";
import { SingleMessage } from "./message";

const LoadingUser = () => {
  return (
    <HStack
      width="80%"
      px="10px"
      w="full"
      justifyContent="space-between"
      alignItems="flex-end"
      h="50xp"
      rounded="15px"
      p="10px"
    >
      <Skeleton h="50px" w="50px" bg="gray" rounded="15px" />
      <HStack w="calc(100% - 70px)" justifyContent="space-between">
        <VStack alignItems="start" spacing="10px" lineHeight="15px">
          <SkeletonText h="20px" noOfLines={1} fontWeight="bold" w="100px" />
          <SkeletonText h="20px" noOfLines={1} fontWeight="bold" w="100px" />
        </VStack>
      </HStack>
    </HStack>
  );
};

const SearchModal = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent rounded="15px" bg="#eeeeee">
        <ModalHeader>Find discution</ModalHeader>
        <ModalCloseButton rounded="full" bg="#cccccc" mt="5px" />
        <ModalBody>
          <Input
            fontSize="18px"
            autoFocus
            placeholder="user name"
            borderColor="black"
          />
          <Text fontSize="20px" mt="20px" fontWeight="bold">
            results
          </Text>
          <LoadingUser />
          <LoadingUser />
          <LoadingUser />
          <LoadingUser />
          <LoadingUser />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
          <SingleMessage />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            search now
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const ChatSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      cursor="pointer"
      onClick={onOpen}
    >
      <Box
        as={IconUserSearch}
        h="25px"
        w="25px"
        color="white"
        onClick={onOpen}
      />
      <Text fontSize="20px" color="#EEEEEE">
        search
      </Text>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};
