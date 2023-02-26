import React from "react";
import { render } from "@testing-library/react";
import CardMedium from "../../../../../src/Components/Card/CardMedium";
import { BrowserRouter } from "react-router-dom";

describe("CardMedium", () => {
  it("renders image correctly", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
    );
  });

  it("renders link correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Sweetshop").closest("a")).toHaveAttribute(
      "href",
      "/sweet-shop"
    );
  });

  it("renders title correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Sweetshop")).toBeInTheDocument();
  });

  it("renders subtitle correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Seasonal Espresso")).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("£16.00")).toBeInTheDocument();
  });
  it("renders subColor correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardMedium
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sweet-shop"
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          price="£16.00"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    const subtitle = getByText("Seasonal Espresso");
    const styles = getComputedStyle(subtitle);
    expect(styles.color).toBe("rgb(153, 8, 12)");
  });
});
