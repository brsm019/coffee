import React from "react";
import { render } from "@testing-library/react";
import CardLarge from "../../../../../src/Components/Card/CardLarge";
import { BrowserRouter } from 'react-router-dom';

describe("CardLarge", () => {
  it("renders image correctly", () => {
    const { getByRole } = render( <BrowserRouter>
        <CardLarge
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          link="/redbrick"
          textColor="white"
          title="Red Brick"
          subtitle="Seasonal Espresso"
          price="£11.00"
        />
      </BrowserRouter>
    );
    
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
    );
  });

  it("renders link correctly", () => {
    const { getByText } = render(<BrowserRouter>
      <CardLarge
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
        link="/redbrick"
        textColor="white"
        title="Red Brick"
        subtitle="Seasonal Espresso"
        price="£11.00"
      />
    </BrowserRouter>);

    expect(getByText("Red Brick").closest("a")).toHaveAttribute("href", "/redbrick");
  });

  it("renders title correctly", () => {
    const { getByText } = render(<BrowserRouter>
      <CardLarge
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
        link="/redbrick"
        textColor="white"
        title="Red Brick"
        subtitle="Seasonal Espresso"
        price="£11.00"
      />
    </BrowserRouter>);

    expect(getByText("Red Brick")).toBeInTheDocument();
  });

  it("renders subtitle correctly", () => {
    const { getByText } = render(<BrowserRouter>
      <CardLarge
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
        link="/redbrick"
        textColor="white"
        title="Red Brick"
        subtitle="Seasonal Espresso"
        price="£11.00"
      />
    </BrowserRouter>);

    expect(getByText("Seasonal Espresso")).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    const { getByText } = render(<BrowserRouter>
      <CardLarge
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
        link="/redbrick"
        textColor="white"
        title="Red Brick"
        subtitle="Seasonal Espresso"
        price="£11.00"
      />
    </BrowserRouter>);

    expect(getByText("£11.00")).toBeInTheDocument();
  });
});
