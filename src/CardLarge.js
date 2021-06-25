import React from "react";
import "./CardLarge.css";
import SignUp from "./SignUp";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardLarge = () => {
  return (
    <>
      <div class="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          class="w-100 h-100 shadow-1-strong rounded mb-4"
          id="cardlarge__image"
          alt=""
        />
        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div class="cardLarge__text">
            <div class="cardLarge__feature__logo"></div>
            <div class="cardLarge__login__line">-----------------</div>
            <h1 class="text-white mb-0">Can you see me?</h1>
            <div class="cardLarge__login__line">-----------------</div>
            <p class="text-white mb-0">Seasonal Espresso</p>
            <div class="cardLarge__offer">
              <span class="cardLarge__price">£11.00</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          id="cardlarge__small"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 h-50 shadow-1-strong rounded mb-4"
          alt=""
        />

        <img
          id="cardlarge__small"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          id="cardlarge__small"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 h-50 shadow-1-strong rounded mb-4"
          alt=""
        />
        <img
          id="cardlarge__small"
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
    </>
  );
};

export default CardLarge;
