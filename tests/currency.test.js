import { expect, request, use } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import "dotenv/config";
import { it } from "mocha";
import { currency } from "./mocks/currency";

use(chaiHttp);

describe("STARTER TEST", () => {
  it("Should get all currencies", (done) => {
    request(app)
      .get("/api/v1/convert")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
  it("Should not convert when body is empty", (done) => {
    request(app)
      .post("/api/v1/convert")
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
  it("Should  get converted money with valid input", (done) => {
    request(app)
      .post("/api/v1/convert")
      .send(currency)
      .end((err, res) => {
        expect(res.statusCode).to.equal(201);
        done();
      });
  });
});
