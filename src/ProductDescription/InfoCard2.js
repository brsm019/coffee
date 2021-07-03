import React from "react";
import "./InfoCard2.css";

const InfoCard2 = ({ preTitle, title9, title10, title11, info }) => {
  return (
    <div class="infoCard2__container">
      <div class="infoCard2__wrapper">
        <p class="infoCard2__pretitle">{preTitle}</p>
        <h1 class="infoCard2__title">
          {title9} <span class="infoCard2__title__span">/</span> {title10}{" "}
          <span class="infoCard2__title__span">/</span> {title11}
        </h1>
        <p class="infoCard2__description">{info}</p>
      </div>
    </div>
  );
};

export default InfoCard2;
