import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../GlobalState/StateProvider";
import { TiDeleteOutline } from "react-icons/ti";

const CheckoutProduct = ({ id, title, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <tr className="checkoutProduct__row">
        <td className="checkoutProduct__title">{title}</td>
        <td className="checkoutProduct__price">£{price}</td>
        <td className="checkoutProduct__delete">
          <button onClick={removeFromBasket}>
            <TiDeleteOutline size="30px" color="darkgray" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CheckoutProduct;
