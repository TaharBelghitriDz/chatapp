import { useMutation } from "@apollo/client";
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconUserSearch } from "@tabler/icons";
import { LoadingUser } from "components/loading/chat";
import { useState } from "react";
import { findUser } from "schemas/mutation";
import { SingleMessage } from "./message";

const SearchModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const [name, setName] = useState("");
  const [searchFun, { loading, data, error }] = useMutation(findUser);
  console.log(data);
  let dataFound: any;
  if (data) dataFound = data.findUser;

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent rounded="15px" bg="#eeeeee">
        <ModalHeader>Find discution</ModalHeader>
        <ModalCloseButton rounded="full" bg="#cccccc" mt="5px" />
        <ModalBody>
          <Input
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            fontSize="18px"
            autoFocus
            placeholder="user name"
            borderColor="green"
            borderWidth="3px"
          />
          <Text fontSize="20px" mt="20px" fontWeight="bold">
            results
          </Text>
          {loading && <LoadingUser />}
          {dataFound?.name && <SingleMessage {...dataFound} />}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            fontSize="20px"
            onClick={() => searchFun({ variables: { name } })}
          >
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
