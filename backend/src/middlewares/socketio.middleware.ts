import { tokenVrfy } from "../helpers/jwt";
import { socketMidFun } from "../types/messages.types";

export const checkToken: socketMidFun = (socket, next) => {
  try {
    let token = socket.handshake.auth.token;
    if (!token) throw "no token";

    tokenVrfy(token, (err, rslt) => {
      if (err || !rslt) throw err || "err";
      next();
    });
  } catch (err) {
    //loging here
    console.log(err);
    socket.emit("err", "unvalid token");
  }
};
