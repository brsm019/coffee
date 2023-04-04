import React from "react";
import { render } from "@testing-library/react";
import Footer from "./../../../../../src/Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  it("renders the correct content for each footer section", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Footer section 1
    expect(getByText("WELCOME TO THE WEBSHOP")).toBeInTheDocument();
    expect(
      getByText(
        "Welcome to the Colmore Row Coffee Roasters webshop. Above are our current offerings that will be updated as the seasons change and new crops arrive."
      )
    ).toBeInTheDocument();
    expect(getByText("More about us")).toBeInTheDocument();
    expect(getByText("Where to drink our coffee")).toBeInTheDocument();

    // Footer section 2
    expect(getByText("FROM THE BLOG")).toBeInTheDocument();
    expect(
      getByText(
        "For regular updates, faq and to leave feedback then visit our blog:"
      )
    ).toBeInTheDocument();
    expect(getByText("colmorerowblog.com")).toBeInTheDocument();

    // Footer section 3
    expect(getByText("SUBSCRIBE TO OUR NEWSLETTER")).toBeInTheDocument();
    expect(
      getByText(
        "Our newsletter is currently under development, we'll let you know when we're up and running"
      )
    ).toBeInTheDocument();
    expect(getByText("Our best coffees")).toBeInTheDocument();

    // Footer section 4
    expect(getByText("WHOLESALE ENQUIRIES")).toBeInTheDocument();
    expect(
      getByText(
        "We are looking to work with people who see value in serving the best coffee possible. If you think you are a good match for what we do and would like more information, please contact us on"
      )
    ).toBeInTheDocument();
    expect(getByText("info@colmorerowcoffee.com")).toBeInTheDocument();

    // Footer section 5
    expect(
      getByText("MEETINGS BY APPOINTMENT ONLY, NO RETAIL SALES ONLINE")
    ).toBeInTheDocument();
    expect(getByText("Colmore Row Coffee Roasters")).toBeInTheDocument();
    expect(getByText("FAQ's")).toBeInTheDocument();
    expect(getByText("Terms & Conditions")).toBeInTheDocument();

    // Footer section 6
    expect(getByText("CONTACT")).toBeInTheDocument();
    expect(getByText("t: 0207 729 3742")).toBeInTheDocument();
    expect(getByText("e: webshop@colmorerowtest.com")).toBeInTheDocument();
    expect(getByText("e:info@colmorerowtest.com")).toBeInTheDocument();
  });
});
