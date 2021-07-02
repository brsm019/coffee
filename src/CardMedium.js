import React from "react";
import "./CardMedium.css";
import { NavLink } from "react-router-dom";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardMedium = ({ image, link, title, subtitle, price, subColor }) => {
  return (
    <>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          src={image}
          class="w-100 h-100 shadow-sm rounded mb-4"
          id="cardMedium__image"
          alt=""
        />

        <NavLink
          to={link}
          className="sidebar__link"
          activeClassName="sidebar__active"
          exact
        >
          <div class="mask">
            <div class="cardMedium__text">
              <div class="cardMedium__login__line">
                ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
              </div>
              <h1 class="cardMedium__title">{title}</h1>
              <div class="cardMedium__login__line">
                {" "}
                ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
              </div>
              <p class="cardMedium__subtitle" style={{ color: subColor }}>
                {subtitle}
              </p>
              <div class="cardMedium__offer">
                <span class="cardMedium__price">{price}</span>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default CardMedium;
