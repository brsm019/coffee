import React from "react";
import "./FooterContent.css";
const FooterContent = ({ title, body, additional1, additional2 }) => {
  return (
    <div className="footerContent__container">
      <h3 class="footerContent__title">{title}</h3>
      <p class="footerContent__paragraph">{body}</p>
      <p class="footerContent__footer">{additional1}</p>
      <p class="footerContent__footer">{additional2}</p>
    </div>
  );
};

export default FooterContent;
