import React from "react";
import "./InfoCard1.css";

const InfoCard1 = ({
  description,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  subtitle7,
  subtitle8,
  width,
  hidden,
  eq,
}) => {
  return (
    <div class="infoCard1__container">
      <div class="infoCard1__wrapper">
        <div class={`infoCard1__grouping `}>
          <div
            class={`infoCard1__group ${eq && "infoCard1__group__eq1"}`}
            style={{ width: { width } }}
          >
            <p class={`infoCard1__title ${eq && "infoCard1__title__eq"}`}>
              {title1}
            </p>
            <p class="infoCard1_subtitle">{subtitle1}</p>
          </div>
          <div class={`infoCard1__group ${eq && "infoCard1__group__eq2"}`}>
            <p class="infoCard1__title">{title2}</p>
            <p class="infoCard1_subtitle">{subtitle2}</p>
          </div>
        </div>
        {/* **********HIDDEN********** */}
        <div class={`infoCard1__grouping`} style={{ display: hidden }}>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title3}</p>
            <p class="infoCard1_subtitle">{subtitle3}</p>
          </div>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title4}</p>
            <p class="infoCard1_subtitle">{subtitle4}</p>
          </div>
        </div>
        {/* **********HIDDEN********** */}
        <div class={`infoCard1__grouping`} style={{ display: hidden }}>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title5}</p>
            <p class="infoCard1_subtitle">{subtitle5}</p>
          </div>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title6}</p>
            <p class="infoCard1_subtitle">{subtitle6}</p>
          </div>
        </div>
        {/* **********HIDDEN********** */}
        <div class={`infoCard1__grouping`} style={{ display: hidden }}>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title7}</p>
            <p class="infoCard1_subtitle">{subtitle7}</p>
          </div>
          <div class="infoCard1__group">
            <p class="infoCard1__title">{title8}</p>
            <p class="infoCard1_subtitle">{subtitle8}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard1;
