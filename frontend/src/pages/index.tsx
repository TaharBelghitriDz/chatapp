import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import { io, Manager, Socket } from "socket.io-client";
import { useEffect, useState } from "react";

import client from "../config/graphql";
import { gql, useQuery, useMutation } from "@apollo/client";

// const getData = async () => {
//   const { data } = await client.mutate({
//     mutation: gql`
//       mutation auth {
//         login(email: "gitnawi@gmail.com", password: "123456789") {
//           err
//           token
//         }
//       }
//     `,
//   });
//   console.log(data);
// };

// getData();

const Query = gql`
  mutation auth {
    login(email: "gitnawi@gmail.com", password: "123456789") {
      err
      token
    }
  }
`;

const manager = io("http://localhost:5005/", {
  autoConnect: false,
  auth: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiI2MmJhMDc2YmEyOGQxMWE1MTA5NzE2MDgiLCJpYXQiOjE2NTYzNTk0NTF9.vM7132y6Uv0hgoAzTofuVpwsWZE4gME1YngHBh7IXK8",
  },
});

manager.open();

const socket = manager.io;

socket.on("open", () => {
  console.log("connected");
});

socket.on("error", (err) => {
  console.log(err);
});
manager.on("err", (err) => {
  console.log(err);
});

socket._autoConnect = false;

manager.emit("hi", "");

// const client = io("http://localhost:5005/", {
//   auth: {
//     token:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiI2MmJhMDc2YmEyOGQxMWE1MTA5NzE2MDgiLCJpYXQiOjE2NTYzNTk0NTF9.vM7132y6Uv0hgoAzTofuVpwsWZE4gME1YngHBh7IXK8",
//   },
// });

// client.on("connection", () => {
//   console.log("new connection started");
// });

// client.emit("reaction", {
//   room: "62ba076ba28d11a510971608",
//   msgId: "62ba3fef2e71c5ec95d7ba5a",
//   reaction: "haha",
// });

// client.on("reaction", () => {
//   console.log("reaction updated");
// });

// client.on("err", (err) => {
//   console.log(err);
// });

type socketState = Socket | any;

const Home: NextPage = () => {
  const [mutationFunction, { data, loading, error, reset }] =
    useMutation(Query);
  mutationFunction();
  console.log(mutationFunction());

  //const [socket, setSocket] = useState<string | null>(null);

  // useEffect(() => {
  //   console.log("run");

  //   const connect = io("http://localhost:5005/", {
  //     auth: {
  //       token:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiI2MmJhMDc2YmEyOGQxMWE1MTA5NzE2MDgiLCJpYXQiOjE2NTYzNTk0NTF9.vM7132y6Uv0hgoAzTofuVpwsWZE4gME1YngHBh7IXK8",
  //     },
  //   });

  //   setSocket(connect);

  //   return () => {
  //     connect.close();
  //   };
  // }, [setSocket]);

  // socket?.on("connection", () => {
  //   console.log("connected");
  // });
  // socket?.on("err", (err: any) => {
  //   console.log("connected");
  //   console.log(err);
  // });

  return (
    <div
      onClick={() => {
        //setSocket("hi");
        manager.emit("hi", "hi");
      }}
    >
      hii from me
    </div>
  );
};

export default Home;
