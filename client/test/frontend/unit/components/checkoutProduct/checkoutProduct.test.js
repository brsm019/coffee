import React from "react";
import { render } from "@testing-library/react";
import CheckoutProduct from "../../../../../src/Components/CheckoutProduct/CheckoutProduct";

describe("CheckoutProduct", () => {
  it("renders the title of the product", () => {
    const title = "Sasaba Advar";
    const price = 13.5;
    const { getByText } = render(
      <CheckoutProduct id={1} title={title} price={price} />
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the price of the product", () => {
    const title = "Sasaba Advar";
    const price = 13.5;
    const { getByText } = render(
      <CheckoutProduct id={1} title={title} price={price} />
    );
    expect(getByText(`£${price}`)).toBeInTheDocument();
  });

  // Make test for calls the removeFromBasket function when the delete button is clicked
});
