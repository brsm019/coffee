import React from "react";
import FooterContent from "./FooterContent";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer__container">
      <div class="footer__group">
        <div class="footer__section">
          <FooterContent />
        </div>
        <div class="footer__section">
          <FooterContent />
        </div>
        <div class="footer__section">
          <FooterContent />
        </div>
      </div>
      <div class="footer__group">
        <div class="footer__section">
          <FooterContent />
        </div>
        <div class="footer__section">
          <FooterContent />
        </div>
        <div class="footer__section">
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default Footer;
