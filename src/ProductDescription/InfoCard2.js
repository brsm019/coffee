import React from "react";
import "./InfoCard2.css";

const InfoCard2 = () => {
  return (
    <div class="infoCard2__container">
      <div class="infoCard2__wrapper">
        <p class="infoCard2__pretitle">Tasting Notes</p>
        <h1 class="infoCard2__title">
          Cherry <span class="infoCard2__title__span">/</span> Milk Chocolate{" "}
          <span class="infoCard2__title__span">/</span> Praline
        </h1>
        <p class="infoCard2__description">
          As the crops change, so do the components of our Red Brick,
          highlighting harvest cycles and celebrating the seasonality of coffee.
          We've combined the great fruit qualities from each component, and
          allowed the sweetness to shine.
        </p>
      </div>
    </div>
  );
};

export default InfoCard2;
