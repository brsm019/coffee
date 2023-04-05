import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { StateProvider } from "../../../../src/GlobalState/StateProvider";
import Cart from "../../../../src/Pages/Cart";
describe("Cart component", () => {
  it("renders Cart header", () => {
    const history = createMemoryHistory();
    const initialState = {
      basket: [],
      user: null,
    };

    render(
      <BrowserRouter>
        <Router history={history}>
          <StateProvider initialState={initialState} reducer={() => {}}>
            <Cart />
          </StateProvider>
        </Router>
      </BrowserRouter>
    );

    const headerElement = screen.getByText(/MY CART/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders checkout button", () => {
    const history = createMemoryHistory();
    const initialState = {
      basket: [],
      user: null,
    };

    render(
      <BrowserRouter>
        <Router history={history}>
          <StateProvider initialState={initialState} reducer={() => {}}>
            <Cart />
          </StateProvider>
        </Router>
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/CHECKOUT/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("redirects to checkout page when checkout button is clicked", () => {
    const history = createMemoryHistory();
    const initialState = {
      basket: [],
      user: null,
    };

    render(
      <BrowserRouter>
        <Router history={history}>
          <StateProvider initialState={initialState} reducer={() => {}}>
            <Cart />
          </StateProvider>
        </Router>
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/CHECKOUT/i);
    fireEvent.click(buttonElement);

    expect(history.location.pathname).toBe("/checkout");
  });
});
