import app from "../src";
import supertest from "supertest";
import "../config/test.config";
import "../config/mongo.config";
import mongoConfig from "../config/mongo.config";

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
