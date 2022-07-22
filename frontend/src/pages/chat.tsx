import { gql, useMutation, useQuery } from "@apollo/client";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import client from "../../config/graphql";
import { ChatContent } from "../components/chat/chat.messages.content";
import { ChateMessagesList } from "../components/chat/chat.messages.list";
import { ChatPrms } from "../components/chat/chat.prms";
import { ChatStory } from "../components/chat/chat.story";
import { loadSchema } from "../helper/graphql.helper";
import { getMessages } from "../shcemas/query";

const Chat: NextPage = (props) => {
  useEffect(() => {
    (async () => {
      const { data, errors } = await loadSchema("query", getMessages);
      console.log(data);
    })();
  }, []);

  return (
    <HStack
      alignContent="start"
      alignItems="start"
      pl="3%"
      h="98vh"
      mt="1vh"
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
