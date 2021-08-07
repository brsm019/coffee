import React from "react";
import "./CardSmall.css";
import { NavLink } from "react-router-dom";

const CardSmall = ({
  image,
  link,
  textColor,
  title,
  subtitle,
  price,
  subColor,
}) => {
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

      <NavLink
        to={link}
        className="sidebar__link"
        activeClassName="sidebar__active"
        exact
      >
        <div class="mask">
          <div class="cardSmall__text">
            <div class="cardSmall__login__line" style={{ color: textColor }}>
              ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
            </div>
            <h1 class="cardSmall__title" style={{ color: textColor }}>
              {title}
            </h1>
            <div class="cardSmall__login__line" style={{ color: textColor }}>
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
      </NavLink>
    </div>
  );
};

export default CardSmall;
