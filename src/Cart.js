import React from "react";
import "./Cart.css";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer/Footer";
import Header from "./Header";
import { useStateValue } from "./GlobalState/StateProvider";

const Cart = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <Header />
      <div className="cart__container">
        <div className="cart__line">-----------------</div>
        <h1 className="cart__header">Checkout</h1>
        <div className="cart__line">-----------------</div>
        <br></br>
        <br></br>
        <br></br>
        <div className="cart__table__row">
          <p className="cart__table__title">ITEM TITLE</p>
          <p className="cart__table__title">PRICE</p>
          <p className="cart__table__title">DELETE</p>
        </div>
        <div className="cart__table__container">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
