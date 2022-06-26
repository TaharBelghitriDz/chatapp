import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

interface sendPrms {
  room: string;
  fromName: string;
  content: string;
  transfer?: string;
  repsponseOf?: string;
}

export type sendType = (prms: sendPrms, socket: Socket) => void;

export type socketMidFun = (
  socket: Socket,
  next: (err?: ExtendedError | undefined) => void
) => void;
