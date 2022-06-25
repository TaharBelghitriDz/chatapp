import express from "express";
import helmet from "helmet";
import cors from "cors";
import "./config/mongo.config";
import { graphqlHTTP } from "express-graphql";
import { notFoundError, reqErrHandler } from "./middlewares/reqErorHandler";
import config from "./config";
import { createServer } from "http";
import schema from "./schemas.graphql/index.scheams.graphql";
import { Server, Socket } from "socket.io";
import socketIoConfog from "./config/socketio.confog";

const app = express();
const server = createServer(app);

app.use(helmet());
app.use(cors());

app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: config.graphql.graphiql,
  })
);

app.use(notFoundError);
app.use(reqErrHandler);

const io = new Server(server, socketIoConfog);
io.path("/");

io.on("connection", (socket) => {
  console.log("new user connected " + socket.id);
});

export default server;
