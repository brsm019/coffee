import React from "react";
import "./Cart.css";
import CheckoutProduct from "../Components/CheckoutProduct/CheckoutProduct";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useStateValue } from "../GlobalState/StateProvider";
import { NavLink, useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const [{ basket, user, getBasketTotal }, dispatch] = useStateValue();

  // console.log({ basket });
  // console.log({ user });
  // console.log({ getBasketTotal });

  let cartTotal = (basket) =>
    basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);
  // console.log(cartTotal(basket));
  let total = cartTotal(basket);

  const onSubmit = () => {
    history.push("/checkout");
  };

  return total === 0 ? (
    <div className="cart">
      <Header />
      <div className="cart__container">
        <div className="cart__line">-----------------</div>
        <h1 className="cart__header">MY CART</h1>
        <div className="cart__line line2">-----------------</div>
        <table className="cart__table">
          <tbody>
            <tr className="cart__heading">
              <th class="cart__titleItemHeading">Item Title</th>
              <th class="cart__priceHeading">Price</th>
              <th class="cart__removeHeading">Delete</th>
              {/* <th class="cart__totalHeading">SUBTOTAL</th> */}
            </tr>

            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            ))}
            <tr>
              <th></th>
              <th className="cart__subtotal">Subtotal:</th>
              <th className="cart__subtotal subtotal__price">
                £{cartTotal(basket).toFixed(2)}
              </th>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onSubmit}
          type="submit"
          class="btn-xs"
          value="Submit"
          style={{ float: "right" }}
        >
          CHECKOUT
        </button>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="cart">
      <Header />
      <div className="cart__container">
        <div className="cart__line">-----------------</div>
        <h1 className="cart__header">MY CART</h1>
        <div className="cart__line line2">-----------------</div>
        <table>
          <tbody>
            <tr className="cart__heading">
              <th class="cart__titleItemHeading">Item Title</th>
              <th class="cart__priceHeading">Price</th>
              <th class="cart__removeHeading">Delete</th>
              {/* <th class="cart__totalHeading">SUBTOTAL</th> */}
            </tr>

            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            ))}
            <tr>
              <th></th>
              <th className="cart__subtotal">Subtotal:</th>
              <th className="cart__subtotal subtotal__price">
                £{cartTotal(basket).toFixed(2)}
              </th>
            </tr>
          </tbody>
        </table>

        <button
          onClick={onSubmit}
          type="submit"
          class="btn-xs"
          value="Submit"
          style={{ float: "right" }}
        >
          CHECKOUT
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
