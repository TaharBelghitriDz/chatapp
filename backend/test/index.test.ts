import app from "../src";
import supertest from "supertest";
import "../config/test.config";
import "../config/mongo.config";
import mongoConfig from "../config/mongo.config";
import { createServer } from "http";
import { Server } from "socket.io";
import Client from "socket.io-client";
import { Socket } from "dgram";
import { DefaultEventsMap } from "@socket.io/component-emitter";

describe("graphql is good !", () => {
  beforeAll(async () => await mongoConfig);

  test("is runnig", (done) => {
    supertest(app)
      .get("/")
      .then((res) => {
        expect(res.body.errors[0].message).toBe("Must provide query string.");
        done();
      });
  });

  test("auth => signup", (done) => {
    const query = `mutation auth{ signup(name :"tahar belghitrii" , email:"gitnawi0@gmail.com" ,password:"123456789" , checkPassword:"123456789"){
      err token
    }}`;

    supertest(app)
      .post("/")
      .send({ query })
      .then((res) => {
        expect(res.body.data.signup.token).not.toBeNull();
        done();
      });
  });

  test("auth => login", (done) => {
    const query = `mutation auth { login(email: "gitnawi0@gmail.com", password: "123456789") {
           err token }}`;

    supertest(app)
      .post("/")
      .send({ query })
      .then((res) => {
        expect(res.body.data.login.token).not.toBeNull();
        done();
      });
  });
});

describe("socket io =>", () => {
  // let io: Server, serverSocket;
  // let clientSocket: Socket<DefaultEventsMap, DefaultEventsMap>;
  // beforeAll((done) => {
  //   const httpServer = createServer();
  //   const io = new Server(httpServer);
  //   httpServer.listen(() => {
  //     const port = httpServer.address() || 1000;
  //     clientSocket = Client(`http://localhost:${port}`);
  //     io.on("connection", (socket: any) => {
  //       serverSocket = socket;
  //     });
  //     clientSocket.on("connect", done);
  //   });
  // });
  // afterAll(() => {
  //   io.close();
  //   clientSocket.close();
  // });
});
