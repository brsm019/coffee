import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./GlobalState/StateProvider";

const Header = () => {
  const history = useHistory();

  //User is not persisting in state??
  let name = localStorage.getItem("name");
  const [{ user }, dispatch] = useStateValue();
  console.log({ user2: user }); //from global state
  console.log(JSON.parse(name));
  let username = JSON.parse(name); // from local store

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("login");
    localStorage.removeItem("name");
    history.push("/login");
    history.go(0);
  };

  return (
    <div className="header">
      {name ? (
        <div className="header__loggedIn">
          <div style={{ color: "#757575", fontSize: "10px" }}>Hi</div>
          <div>{username.name}</div>
        </div>
      ) : (
        <Link to="/signup" className="header__item">
          Account sign up
        </Link>
      )}
      {name ? (
        <button className="header__logOut" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login" className="header__item">
          Login
        </Link>
      )}
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
