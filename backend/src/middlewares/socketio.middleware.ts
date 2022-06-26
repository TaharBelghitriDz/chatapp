import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { socketMidFun } from "../types.interfaces/messages.types";

const checkToken: socketMidFun = (socket, next) => {
  console.log("xsokcet.min one");
  next();
};
