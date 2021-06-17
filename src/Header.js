import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/signup" className="header__item">
        Account sign up
      </Link>
      <Link to="/login" className="header__item">
        Login
      </Link>
      <span className="header__item">Items: 01</span>
      <span className="header__item">Total: £14.00</span>
      <Link to="/myCart" id="header__cart" className="header__item">
        My Cart
      </Link>
    </div>
  );
};

export default Header;
