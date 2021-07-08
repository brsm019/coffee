import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./GlobalState/StateProvider";

const Header = () => {
  //User is not persisting in state??
  let name = localStorage.getItem("name");
  const [{ user }, dispatch] = useStateValue();
  console.log({ user2: user });
  console.log({ name2: name });
  return (
    <div className="header">
      <span>{user}</span>
      <Link to="/signup" className="header__item">
        Account sign up
      </Link>
      <Link to="/login" className="header__item">
        Login
      </Link>
      <span className="header__item">
        Items: <b>01</b>
      </span>
      <span className="header__item">
        Total: <b>£14.00</b>
      </span>
      <Link to="/myCart" id="header__cart" className="header__item">
        My Cart
      </Link>
    </div>
  );
};

export default Header;
