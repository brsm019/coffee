import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import ShopEquipment from "./ShopEquipment";
import "./Sidebar.css";

const Sidebar = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>Buy Coffee!</div>,
      main: () => <h2>Coffee Selection</h2>,
    },
    {
      path: "/equipment",
      sidebar: () => <div>equipment!</div>,
      main: () => <h2>Shop Equipment</h2>,
    },
  ];

  return (
    <div className="sidebar">
      <Router>
        <div>
          <nav>
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
            <ul className="sidebar__unordered__list">
              <li className="sidebar__list">
                <Link to="/" className="sidebar__link">
                  SHOP COFFEE
                </Link>
              </li>
              <li className="sidebar__list">
                <Link to="/equipment" className="sidebar__link">
                  SHOP EQUIPMENT
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <div class="sidebar__pages">
              <Route path="/equipment">
                <ShopEquipment />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Sidebar;

//test
