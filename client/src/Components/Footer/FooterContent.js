import React from "react";
import "./FooterContent.css";
const FooterContent = ({ title, body, additional1, additional2 }) => {
  return (
    <div className="footerContent__container">
      <h3 className="footerContent__title">{title}</h3>
      <p className="footerContent__paragraph">{body}</p>
      <p className="footerContent__footer">{additional1}</p>
      <p className="footerContent__footer">{additional2}</p>
    </div>
  );
};

export default FooterContent;
