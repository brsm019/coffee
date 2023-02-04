const request = require("supertest");
const app = require("../../../server");
const chai = require("chai");
const { expect } = chai;

describe("Sign In Function Tests", () => {
  it("should return a token and user if sign in is successful", async () => {
    const response = await request(app)
      .post("/auth/sign_in")
      .send({ email: "harvey@gmail.com", password: "password" });
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.property("token");
    expect(response.body.user.email).to.equal("harvey@gmail.com");
    expect(response.body.user.firstName).to.equal("Havery");
    expect(response.body.user.lastName).to.equal("Specter");
    expect(response.body).to.have.property("auth", true);
  });

  it("should return a 401 status if the email or password is invalid", async () => {
    const response = await request(app)
      .post("/auth/sign_in")
      .send({ email: "invaliduser@example.com", password: "invalid" });
    expect(response.statusCode).to.equal(401);
  });

  it("should return the correct error message if the email or password is invalid", async () => {
    const response = await request(app)
      .post("/auth/sign_in")
      .send({ email: "invaliduser@example.com", password: "invalid" });
    expect(response.body.message).to.equal(
      "Authentication failed. Invalid user or password."
    );
  });
});
