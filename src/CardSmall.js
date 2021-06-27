import React from "react";
import "./CardSmall.css";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardSmall = ({ image, link, title, subtitle, price, subColor }) => {
  return (
    <div
      id="cardSmall__contain"
      class="col-lg-3 col-md-6 col-sm-6 mb-4 mt-4 mb-4"
    >
      <img
        src={image}
        class="w-100 h-100 shadow-sm rounded mb-4"
        id="cardSmall__image"
        alt=""
      />

      <a href={link}>
        <div class="mask">
          <div class="cardSmall__text">
            <div class="cardSmall__login__line">
              ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
            </div>
            <h1 class="cardSmall__title">{title}</h1>
            <div class="cardSmall__login__line">
              {" "}
              ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
            </div>
            <p class="cardSmall__subtitle" style={{ color: subColor }}>
              {subtitle}
            </p>
            <div class="cardSmall__offer">
              <span class="cardSmall__price">{price}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardSmall;
