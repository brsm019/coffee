import React from "react";
import FooterContent from "./FooterContent";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer__container">
      <div class="footer__group">
        <div class="footer__section">
          <FooterContent
            title="WELCOME TO THE WEBSHOP"
            body="Welcome to the Square Mile Coffee Roasters webshop. Above are our current offerings that will be updated as the seasons change and new crops arrive."
            additional1="More about us"
            additional2="Where to drink our coffee"
          />
        </div>
        <div class="footer__section">
          <FooterContent
            title="FROM THE BLOG"
            body="For regular updates, faq and to leave feedback then visit our blog:"
            additional1="squaremileblog.com"
          />
        </div>
        <div class="footer__section">
          <FooterContent
            title="SUBSCRIBE TO OUR NEWSLETTER"
            body="Our newsletter is currently under development, we'll let you know when we're up and running"
            additional1="Our best coffees"
          />
        </div>
      </div>
      <div class="footer__group">
        <div class="footer__section">
          <FooterContent
            title="WHOLESALE ENQUIRIES"
            body="We are looking to work with people who see value in serving the best coffee possible. If you think you are a good match for what we do and would like more information, please contact us on"
            additional1="info@squaremilecoffee.com"
          />
        </div>
        <div class="footer__section">
          <FooterContent
            title="MEETINGS BY APPOINTMENT ONLY, NO RETAIL SALES ONLINE"
            body="Square Mile Coffee Roasters"
            additional1="FAQ's"
            additional2="Terms & Conditions"
          />
        </div>
        <div class="footer__section">
          <FooterContent
            title="CONTACT"
            body="t: 0207 729 3742"
            additional1="e: webshop@squaremiletest.com"
            additional2="e:info@squaremiletest.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
