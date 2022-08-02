import { reaction, send } from "../controllers/messages.controllers";
import { Socket } from "socket.io";
import { validateEvnt } from "../helpers/sockeIoHelpers";

const events = (data: any, socket: Socket): Record<string, any> => ({
  send: send(data, socket),
  reaction: reaction(data, socket),
  remove: reaction(data, socket),
  seen: reaction(data, socket),
});

const socket = (socket: Socket) => {
  socket.onAny(async (target: string, data: any) => {
    try {
      if (typeof data !== "object") data = JSON.parse(data);

      const valid = await validateEvnt(target, data);

      if (!valid) socket.emit("err", "something wrong happend");
      else events(data, socket)[target];
    } catch (err) {
      //logign here
      console.log(err);
      socket.emit("err", "something wrong happend #1");
    }
  });
};
export default socket;
