import { gql, useMutation, useQuery } from "@apollo/client";
import { HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import client from "../../config/graphql";
import { ChateMessagesList } from "../components/chat/chat.messages.list";
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
    <HStack mx="20px">
      <VStack spacing="10px">
        <ChatStory />
        <ChateMessagesList />
      </VStack>
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
