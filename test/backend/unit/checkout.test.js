const request = require("supertest");
const app = require("../../../server");
const chai = require("chai");
const { expect } = chai;

describe("Checkout Function Tests", () => {
  it("should return a client secret", async () => {
    const price = 11.0;
    const response = await request(app).post("/create-payment-intent").send({
      priceTotal: price,
    });
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.property("clientSecret");
  });

  it("should return a 500 status if payment doesn't process", async () => {
    const response = await request(app).post("/create-payment-intent").send({
      priceTotal: "Wrong Price",
    });
    expect(response.statusCode).to.equal(500);
    expect(response.body.error).to.equal("Error creating payment intent");
  });
});
