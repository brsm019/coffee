import React from "react";
import "./AddToCartCard.css";
import { useStateValue } from "../GlobalState/StateProvider";

const AddToCartCard = ({ id, title, subtitle, subColor, price }) => {
  const [state, dispatch] = useStateValue();
  console.log(useStateValue());
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        subtitle,
        price,
      },
    });
  };

  console.log(state);

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
          <button
            type="submit"
            class="btn-xs"
            value="Submit"
            onClick={addToBasket}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartCard;
