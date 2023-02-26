import React from "react";
import { render } from "@testing-library/react";
import CardSmall from "../../../../../src/Components/Card/CardSmall";
import { BrowserRouter } from "react-router-dom";

describe("CardSmall", () => {
  it("renders image correctly", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
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
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Sasaba Advar").closest("a")).toHaveAttribute(
      "href",
      "/sasaba"
    );
  });

  it("renders title correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Sasaba Advar")).toBeInTheDocument();
  });

  it("renders subtitle correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("Ethiopian Espresso")).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    expect(getByText("£13.50")).toBeInTheDocument();
  });
  it("renders subColor correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <CardSmall
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          link="/sasaba"
          title="Sasaba Advar"
          subtitle="Ethiopian Espresso"
          price="£13.50"
          subColor="#99080c"
        />
      </BrowserRouter>
    );

    const subtitle = getByText("Ethiopian Espresso");
    const styles = getComputedStyle(subtitle);
    expect(styles.color).toBe("rgb(153, 8, 12)");
  });
});
