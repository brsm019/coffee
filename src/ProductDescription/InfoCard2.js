import React from "react";
import "./InfoCard2.css";

const InfoCard2 = ({
  preTitle,
  preTitle2,
  title9,
  title10,
  title11,
  info,
  info2,
  hidden,
  eq,
}) => {
  return (
    <div class="infoCard2__container">
      <div class="infoCard2__wrapper">
        <p class={`infoCard2__pretitle ${eq && "infoCard2__pretitle__eq"}`}>
          {preTitle}
        </p>
        <h1 class={`infoCard2__title `} style={{ display: hidden }}>
          {title9} <span class={`infoCard2__title__span`}>/</span> {title10}{" "}
          <span class="infoCard2__title__span">/</span> {title11}
        </h1>
        <p
          class={`infoCard2__description ${eq && "infoCard2__description__eq"}`}
        >
          {info}
        </p>
        {/* For Equipment */}
        <p class={`infoCard2__pretitle ${eq && "infoCard2__pretitle__eq"}`}>
          {preTitle2}
        </p>
        <p
          class={`infoCard2__description ${eq && "infoCard2__description__eq"}`}
        >
          {info2}
        </p>
      </div>
    </div>
  );
};

export default InfoCard2;
