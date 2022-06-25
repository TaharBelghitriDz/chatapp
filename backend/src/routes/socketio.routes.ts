import { Socket } from "socket.io";
import { validateEvnt } from "../helpers/sockeIoHelpers";

const socket = (socket: Socket) => {
  socket.onAny((target: string, data: any) => {
    try {
      if (typeof data !== "object")
        socket.emit("err", "somthing wrong happend");

      const valid = validateEvnt(target);
      if (!valid) socket.emit("err", valid);
      else {
      }
    } catch {
      //logign here
      socket.emit("err", "somthing wrong happend");
    }
  });
};
export default socket;
