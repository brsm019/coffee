import React from "react";
import { render, cleanup } from "@testing-library/react";
import CardForm from "../../../../../src/Components/Card/CardForm";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

// Wrap test in router to avoid
// Uncaught Error: Invariant failed: You should not use <Route> outside a <Router>

describe("CardForm component", () => {
  it("renders the component", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <CardForm />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
