import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
import ShopEquipment from "./ShopEquipment";
import ProductDescription from "./ProductDescription/ProductDescription";
import "./SideBar.css";
import SignUp from "./SignUp";
let auth = localStorage.getItem("auth") === '{"auth":true}';

let routes = [
  {
    path: "/signup",
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <SignUp />
      </div>
    ),
  },
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/equipment",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <ShopEquipment />
      </div>
    ),
  },
  {
    path: "/mycart",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <Cart />
      </div>
    ),
  },
  {
    path: "/login",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/equipment",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/redbrick",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="Red Brick"
          subtitle="Seasonal Espresso"
          subColor="#99080c"
          price="11.00"
          //PictureCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          //InfoCard1
          title1="2/3"
          title2="1/3"
          title3="Country"
          title4="Country"
          title5="Region"
          title6="Region"
          title7="Process"
          title8="Process"
          subtitle1="CORDILLERA DEL FEUO"
          subtitle2="SUKE QUTO"
          subtitle3="COSTA RICA"
          subtitle4="ETHIOPIA"
          subtitle5="WEST VALLEY"
          subtitle6="GUJI"
          subtitle7="WHITE HONEY"
          subtitle8="WASHED"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="Cherry"
          title10="Milk Chocolate"
          title11="Praline"
          info="As the crops change, so do the components of our Red Brick,
          highlighting harvest cycles and celebrating the seasonality of coffee.
          We've combined the great fruit qualities from each component, and
          allowed the sweetness to shine."
        />
      </>
    ),
  },
  {
    path: "/sweetshop",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="Sweetshop"
          subtitle="Seasonal Espresso"
          subColor="#99080c"
          price="16.00"
          //PictureCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          //InfoCard1
          title1="2/3"
          title2="1/3"
          title3="Country"
          title4="Country"
          title5="Region"
          title6="Region"
          title7="Process"
          title8="Process"
          subtitle1="WOSASA"
          subtitle2="EL RUBI"
          subtitle3="ETHIOPIA"
          subtitle4="COLUMBIA"
          subtitle5="GUJI"
          subtitle6="HUILA"
          subtitle7="NATURAL"
          subtitle8="WASHED"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="Honey"
          title10="Milk Chocolate"
          title11="Walnut"
          info="The idea behind our Sweetshop blend is simple: combine sweet and characterful coffee to create a fun, wildly complex and fruit-driven espresso. This isn’t about balance and it certainly isn’t about tradition. This is about cramming as much fruit and fun into the cup as possible. We want an espresso that doesn’t taste like anything else."
        />
      </>
    ),
  },
  {
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <NoMatch />
      </div>
    ),
  },
];

let unAuthedRoute = [
  {
    path: "/mycart",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <Cart />
        <Redirect to="/login" />
      </div>
    ),
  },
];

let unAuthedRoutes = routes.map(
  (obj) => unAuthedRoute.find((o) => o.path === obj.path) || obj
);

let authenticatedRoutes = auth ? routes : unAuthedRoutes;
// console.log({ auth });
// console.log({ routes });
// console.log({ unAuthedRoutes });
// console.log({ authenticatedRoutes });

const SideBar = () => {
  return (
    <Router>
      <div className="sidebar" style={{ display: "flex", height: "100%" }}>
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
                MY CART
              </NavLink>
            </li>
          </ul>
          <div className="sidebar__footer">
            <h6 className="sidebar__footer__title">
              Square Mile<br></br>Coffee Roasters
            </h6>
            <a
              className="sidebar__footer__link"
              href="mailto:testing@squaremiletest.com"
            >
              webshop@squaremiletest.com
            </a>
            <br></br>
            <a
              className="sidebar__footer__link"
              href="mailto:testing@squaremiletest.com"
            >
              info@squaremiletest.com
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
