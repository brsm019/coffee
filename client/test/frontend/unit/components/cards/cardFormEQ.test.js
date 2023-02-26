import React from "react";
import { render, cleanup } from "@testing-library/react";
import CardFormEQ from "../../../../../src/Components/Card/CardFormEQ";
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe("CardForm component", () => {
  it("renders the component", () => {
    const { asFragment } = render(<BrowserRouter><CardFormEQ /></BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
