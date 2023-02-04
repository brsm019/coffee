const request = require("supertest");
const app = require("../../../server"); // The Express app that uses the middleware
const { expect } = require("chai");

describe("Middleware Tests", () => {
  it("should return a 200 status if user is logged in", async () => {
    const signInRes = await request(app)
      .post("/auth/sign_in")
      .send({ email: "harvey@gmail.com", password: "password" });
    const response = await request(app)
      .post("/profile")
      .set("Authorization", `Bearer ${signInRes.body.token}`)
      .send();
    expect(response.statusCode).to.equal(200);
  });

  it("should return a 401 status if user is not logged in", async () => {
    const response = await request(app).post("/profile").send();
    expect(response.statusCode).to.equal(401);
  });

  it("should return correct error message if user is not logged in", async () => {
    const response = await request(app).post("/profile").send();
    expect(response.body.message).to.equal("Unauthorized user!!");
  });
});
