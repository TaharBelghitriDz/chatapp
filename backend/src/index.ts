import express from "express";
import helmet from "helmet";
import cors from "cors";
import "./config/mongo.config";
import { graphqlHTTP } from "express-graphql";
import { notFoundError, reqErrHandler } from "./middlewares/reqErorHandler";
import config from "./config";
import { createServer } from "http";
import schema from "./schemas.graphql/index.scheams.graphql";
import { Server } from "socket.io";
import socketIoConfog from "./config/socketio.confog";
import socket from "./routes/socketio.routes";
import { checkToken } from "./middlewares/socketio.middleware";
import { msg } from "./models/messages.model";
import { graphqlUploadExpress } from "graphql-upload";

const app = express();
const server = createServer(app);

app.use(helmet());
app.use(cors());
app.use(graphqlUploadExpress());

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
io.use(checkToken);
io.on("connection", socket);

// msg.findOne({}, "_id", (e: any, r: any) => {
//   console.log(`${r._id}`);
// });

const m = () => "hi";

const m1 = () => {
  console.log("works here");
};

console.log(m);

export default server;
