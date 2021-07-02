import React from "react";
import "./AddToCartCard.css";

const AddToCartCard = ({ title, subtitle, subColor, price }) => {
  return (
    <div class="addToCartCard__container">
      <div class="addToCartCard__text">
        <div class="addToCartCard__login__line">
          ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
        </div>
        <h1 class="addToCartCard__title">{title}</h1>
        <div class="addToCartCard__login__line">
          {" "}
          ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
        </div>
        <p class="addToCartCard__subtitle" style={{ color: subColor }}>
          {subtitle}
        </p>
        <div class="addToCartCard__offer">
          <span class="addToCartCard__price">£{price}</span>
        </div>
        <div class="form__button">
          <button type="submit" class="btn-xs" value="Submit">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartCard;
