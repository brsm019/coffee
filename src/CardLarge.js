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
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
          class="w-100 h-100 shadow-1-strong rounded mb-4"
          id="cardlarge__image"
          alt=""
        />
      </div>

      <div class="col-lg-3 col-md-12 col-sm-12 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 h-50 shadow-1-strong rounded mb-4"
          alt=""
        />

        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
      <div class="col-lg-3 col-md-12 col-sm-12 mb-4 mb-lg-0">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 h-50 shadow-1-strong rounded mb-4"
          alt=""
        />
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
          class="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
    </>
  );
};

export default CardLarge;
