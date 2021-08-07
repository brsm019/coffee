import React from "react";
import "./CardMedium.css";
import { NavLink } from "react-router-dom";

const CardMedium = ({
  image,
  link,
  textColor,
  title,
  subtitle,
  price,
  subColor,
}) => {
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
              <div class="cardMedium__login__line" style={{ color: textColor }}>
                ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
              </div>
              <h1 class="cardMedium__title" style={{ color: textColor }}>
                {title}
              </h1>
              <div class="cardMedium__login__line" style={{ color: textColor }}>
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
