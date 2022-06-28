import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";

interface sendPrms {
  room: string;
  to: string;
  content: string;
  transfer?: string;
  picture?: string;
  repsponseOf?: string;
}

export type sendType = (prms: sendPrms, socket: Socket) => void;

interface reactionPrms {
  room: string;
  reaction: string;
  msgId: string;
}

export type reactionType = (prms: reactionPrms, socket: Socket) => void;

export type seenType = (prms: { room: string }, socket: Socket) => void;

export type socketMidFun = (
  socket: Socket,
  next: (err?: ExtendedError | undefined) => void
) => void;
