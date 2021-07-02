import React from "react";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="nomatch__container">
      <h1 class="nomatch__title">404</h1>
      <h4 class="nomatch__subtitle">Page Not Found</h4>
      <p class="nomatch__paragraph">
        The page you are looking for might have been removed, had it's name
        changed or is temporarily unavailable...
      </p>
    </div>
  );
};

export default NoMatch;
