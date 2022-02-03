import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../../GlobalState/StateProvider";

const Header = () => {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  let name = localStorage.getItem("name");
  const [{ user, basket }, dispatch] = useStateValue();

  let username = JSON.parse(name); // from local store

  const getBasket = (basket) => {
    return basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);
  };

  let totalBasket = name ? getBasket(basket).toFixed(2) : "0";
  let basketCount = name ? ("0" + basket.length).slice(-2) : "00";

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

      {width <= 520 ? (
        <Link to="/" className="header__item">
          Coffee
        </Link>
      ) : (
        <span className="header__item">
          Items: <b>{basketCount}</b>
        </span>
      )}
      {width <= 520 ? (
        <Link to="/equipment" className="header__item">
          Equipment
        </Link>
      ) : (
        <span className="header__item">
          Total: <b>{`£ ${totalBasket}`}</b>
        </span>
      )}
      <Link to="/myCart" id="header__cart" className="header__item">
        My Cart
      </Link>
    </div>
  );
};

export default Header;
