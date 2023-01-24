import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./SideBar.css";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import { routes, unAuthedRoute } from "../Components/Sidebar/Routes";
let auth = localStorage.getItem("auth") === '{"auth":true}';

let unAuthedRoutes = routes.map(
  (obj) => unAuthedRoute.find((o) => o.path === obj.path) || obj
);

let authenticatedRoutes = auth ? routes : unAuthedRoutes;

const SideBar = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="sidebar" style={{ display: "flex", height: "100%" }}>
        <div className="sidebar__content">
          <div class="sidebar__logo">
            <a href="/" title="title">
              <img
                className="sidebar__logo__img"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Ftransparent-coffee%2Ftransparent-coffee-23.png&f=1&nofb=1"
                alt="Colmore Row Coffee Roasters"
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
                MY CART
              </NavLink>
            </li>
          </ul>
          <div className="sidebar__footer">
            <h6 className="sidebar__footer__title">
              Colmore Row<br></br>Coffee Roasters
            </h6>
            <a
              className="sidebar__footer__link"
              href="mailto:testing@colmorerowtest.com"
            >
              webshop@colmorerowtest.com
            </a>
            <br></br>
            <a
              className="sidebar__footer__link"
              href="mailto:testing@colmorerowtest.com"
            >
              info@colmorerowtest.com
            </a>
          </div>

          <Switch>
            {authenticatedRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              ></Route>
            ))}
          </Switch>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div style={{ flex: 1, padding: "" }} className="sidebar__pages">
          <Switch>
            {authenticatedRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              ></Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default SideBar;
