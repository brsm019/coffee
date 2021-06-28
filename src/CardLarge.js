import React from "react";
import "./CardLarge.css";
import CardMedium from "./CardMedium";
import SignUp from "./SignUp";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardLarge = ({ image, link, title, subtitle, price }) => {
  return (
    <div class="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0">
      <img
        src={image}
        class="w-100 h-100 shadow-1-strong rounded mb-4"
        id="cardlarge__image"
        alt=""
      />

      <a href={link}>
        <div class="mask">
          <div class="cardLarge__text">
            <div class="cardLarge__feature__logo"></div>
            <div class="cardLarge__login__line">-----------------</div>
            <h1 class="cardLarge__title">{title}</h1>
            <div class="cardLarge__login__line">-----------------</div>
            <p class="cardLarge__subtitle">{subtitle}</p>
            <div class="cardLarge__offer">
              <span class="cardLarge__price">{price}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardLarge;
