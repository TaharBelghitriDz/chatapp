import { Socket } from "socket.io";
import { send } from "../controllers/send";
import { validateEvnt } from "../helpers/sockeIoHelpers";

const events = (data: any, socket: Socket): Record<string, any> => ({
  send: send(data, socket),
});

const socket = (socket: Socket) => {
  console.log("heeree");

  socket.onAny(async (target: string, data: any) => {
    try {
      if (typeof data !== "object")
        socket.emit("err", "somthing wrong happend");

      const valid = await validateEvnt(target, data);

      if (!valid) socket.emit("err", "somthing wrong happend");
      else events(data, socket)[target];
    } catch (err) {
      //logign here
      socket.emit("err", "somthing wrong happend");
    }
  });
};
export default socket;
