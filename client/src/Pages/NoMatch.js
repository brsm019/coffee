import React from "react";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="nomatch__image_container">
      <img
        src="https://www.pngarts.com/files/3/Coffee-Beans-PNG-Transparent-Image.png"
        alt=""
      />

      <div className="nomatch__container">
        <h1 class="nomatch__title">404</h1>
        <h4 class="nomatch__subtitle">Page Not Found</h4>
        <p class="nomatch__paragraph">
          The page you are looking for might have been removed, had it's name
          changed or is temporarily unavailable...
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
