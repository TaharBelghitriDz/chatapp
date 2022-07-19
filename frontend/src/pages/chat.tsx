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
   <HStack pl="3%" >
     <VStack spacing="20px" w="auto" >
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
