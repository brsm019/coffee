import React, { useState, useEffect } from "react";
import "./CardLarge.css";
import { NavLink } from "react-router-dom";

const CardLarge = ({ image, link, textColor, title, subtitle, price }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 575;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div class="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0">
      <img
        src={image}
        class="w-100 h-100 shadow-1-strong rounded mb-4"
        id="cardlarge__image"
        alt=""
      />

      <NavLink
        to={link}
        className="sidebar__link"
        activeClassName="sidebar__active"
        exact
      >
        <div class="mask">
          <div class="cardLarge__text">
            <div
              class={
                width == breakpoint || width < breakpoint
                  ? `cardLarge__feature__logo hidden`
                  : `cardLarge__feature__logo `
              }
            ></div>
            <div class="cardLarge__login__line" style={{ color: textColor }}>
              ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
            </div>
            <h1 class="cardLarge__title">{title}</h1>
            <div class="cardLarge__login__line" style={{ color: textColor }}>
              ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
            </div>
            <p class="cardLarge__subtitle">{subtitle}</p>
            <div class="cardLarge__offer">
              <span class="cardLarge__price">{price}</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CardLarge;
