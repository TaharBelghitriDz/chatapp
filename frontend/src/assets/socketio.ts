import { io } from "socket.io-client";

const socket = io("http://localhost:5005/", {
  auth: { token: localStorage.getItem("token") },
  autoConnect: false,
});

if (localStorage.getItem("token")) socket.connect();

socket.io.on("error", () => {});
socket.io.on("reconnect_attempt", () => {});
socket.io.on("open", () => {});

export default socket;
