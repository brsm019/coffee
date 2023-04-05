import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./../../../../../src/Components/ScrollToTop/ScrollToTop";

window.scrollTo = jest.fn();

describe("ScrollToTop component", () => {
  it("should scroll to top when navigating to a new page", () => {
    afterAll(() => {
      jest.clearAllMocks();
    });

    const history = createMemoryHistory();
    const { rerender } = render(
      <BrowserRouter>
        <ScrollToTop history={history} />
      </BrowserRouter>
    );

    // Scroll down the page
    window.scrollTo(0, 100);

    // Simulate a navigation event by updating the location
    history.location.pathname = "/new-page";
    rerender(
      <BrowserRouter>
        <ScrollToTop history={history} />
      </BrowserRouter>
    );

    // Check that the page has scrolled to the top
    expect(window.scrollY).toBe(0);
  });
});
