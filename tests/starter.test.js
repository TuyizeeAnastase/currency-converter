import { expect, request, use } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import "dotenv/config";
import { it } from "mocha";

use(chaiHttp);

describe("STARTER TEST", () => {
  it("Should return welcome message", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("Should return page not found", (done) => {
    request(app)
      .get("/test")
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});