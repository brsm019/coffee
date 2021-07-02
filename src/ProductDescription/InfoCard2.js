import React from "react";
import "./InfoCard2.css";

const InfoCard2 = ({ preTitle, title1, title2, title3, info }) => {
  return (
    <div class="infoCard2__container">
      <div class="infoCard2__wrapper">
        <p class="infoCard2__pretitle">{preTitle}</p>
        <h1 class="infoCard2__title">
          {title1} <span class="infoCard2__title__span">/</span> {title2}{" "}
          <span class="infoCard2__title__span">/</span> {title3}
        </h1>
        <p class="infoCard2__description">{info}</p>
      </div>
    </div>
  );
};

export default InfoCard2;
