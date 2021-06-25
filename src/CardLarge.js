import React from "react";
import "./CardLarge.css";
import SignUp from "./SignUp";

const CardLarge = () => {
  return (
    <>
      <div class="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0">
        {/* <div
          style={{
            backgroundImage: `url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg")`,
            width: "100%",
            height: "100%",
          }}
        ></div> */}
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          class="w-100 h-100 shadow-1-strong rounded mb-4"
          id="cardlarge__image"
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
