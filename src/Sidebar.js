import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Cart from "./Cart";
import Login from "./Login";
// import TopBar from "./TopBar";
import "./SideBar.css";
import SignUp from "./SignUp";

//Need to make the two navbars communicate with each other so pages aren't overlaying each other

const routes = [
  {
    path: "/signup",
    sidebar: () => <div>signup</div>,
    main: () => (
      <div>
        <h2>Sign Up</h2>
      </div>
    ),
  },
  {
    path: "/",
    exact: true,
    sidebar: () => <div>sidebar1</div>,
    main: () => (
      <div>
        <h2>Coffee Selection</h2>
      </div>
    ),
  },
  {
    path: "/equipment",
    exact: true,
    sidebar: () => <div>sidebar2</div>,
    main: () => (
      <div>
        <h2>Shop Equipment</h2>
      </div>
    ),
  },
];

//Move styling into css

const SideBar = () => {
  return (
    <Router>
      <div className="sidebar" style={{ display: "flex" }}>
        <div className="sidebar__content">
          <div class="sidebar__logo">
            <a href="/" title="title">
              <img
                className="sidebar__logo__img"
                src="https://cdn.shopify.com/s/files/1/0017/1562/t/18/assets/sqmile-img-logo-transparent@2x@2x.png?v=1623381581665049233"
                alt="Square Mile Coffee Roasters"
              />
            </a>
          </div>
          <p className="sidebar__break">----------</p>
          <ul
            className="sidebar__unordered__list"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <li className="sidebar__list">
              <NavLink
                to="/"
                className="sidebar__link"
                activeClassName="sidebar__active"
                exact
              >
                SHOP COFFEE
              </NavLink>
            </li>
            <li className="sidebar__list">
              <NavLink
                to="/equipment"
                className="sidebar__link"
                activeClassName="sidebar__active"
              >
                SHOP EQUIPMENT
              </NavLink>
            </li>

            <li className="sidebar__list">
              <NavLink
                to="/mycart"
                className="sidebar__link"
                activeClassName="sidebar__active"
              >
                My Cart
              </NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span className="sidebar__list2">
              <NavLink
                to="/login"
                className="sidebar__link"
                id="footer__size"
                activeClassName="sidebar__active"
              >
                LOGIN
              </NavLink>
            </span>
            <span className="sidebar__list3">
              <NavLink
                to="/signup"
                className="sidebar__link"
                id="footer__size"
                activeClassName="sidebar__active"
              >
                SIGN UP
              </NavLink>
            </span>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div style={{ flex: 1, padding: "" }} className="sidebar__pages">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default SideBar;

//test
