import { gql, useMutation, useQuery } from "@apollo/client";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { ChatContent } from "components/chat/chat.messages.content";
import { ChateMessagesList } from "components/chat/chat.messages.list";
import { ChatPrms } from "components/chat/chat.prms";
import { loadSchema } from "helper/graphql.helper";
import Emitter from "helper/state";
import { NextPage } from "next";
import { emit } from "process";
import { useEffect, useState } from "react";
import { getMessages, getUserDetails } from "schemas/query";
import client from "../../config/graphql";

const Chat: NextPage = () => {
  useEffect(() => {
    (async () => {
      const messages = await loadSchema("query", getMessages);
      const userDetails = await loadSchema("query", getUserDetails);

      if (!messages.errors && !userDetails.errors)
        Emitter.emit("getUserDetails", { messages, userDetails });
    })();
  }, []);

  return (
    <HStack
      alignContent="start"
      alignItems="start"
      pl="3%"
      h="98vh"
      mt="1vh"
      maxW="1500px"
      pos="relative"
      left="10%"
      spacing="20px"
    >
      <ChateMessagesList />
      <ChatContent />
      <ChatPrms />
    </HStack>
  );
};

// export const getStaticProps = async () => {
//   const { data, errors } = await loadSchema("query", getMessages);

//   console.log(data);
//   console.log(errors);

//   return {
//     props: data,
//   };
// };

export default Chat;
