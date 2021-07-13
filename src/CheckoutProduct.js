import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./GlobalState/StateProvider";
import { TiDeleteOutline } from "react-icons/ti";

const CheckoutProduct = forwardRef(({ id, title, price }, ref) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" ref={ref}>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>
          <TiDeleteOutline size="30px" color="darkgray" />
        </button>
      </div>
    </div>
  );
});

export default CheckoutProduct;
