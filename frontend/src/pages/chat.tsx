import { gql, useMutation, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useEffect } from "react";
import client from "../../config/graphql";
import { loadSchema } from "../helper/graphql";
import { getMessages } from "../shcemas/query";

const Chat: NextPage = (props) => {
  useEffect(() => {
    (async () => {
      const { data, errors } = await loadSchema("query", getMessages);
      console.log(data);
    })();
  }, []);

  return <div>hi from Messages</div>;
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
