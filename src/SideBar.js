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
    path: "/sweet-shop",
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
          image="https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
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
    path: "/sasaba",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="SASABA"
          subtitle="ETHIOPIA ESPRESSO"
          subColor="#99080c"
          price="13.50"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_b6cb8e3a-c8d2-4f8c-ba25-6e723925fa5f_large.jpg?v=1623073637"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="REGIONAL LANDRACES"
          subtitle3="ETHIOPIA"
          subtitle4="WASHED"
          subtitle5="GUJI"
          subtitle6="2000-2150 MASL"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="APRICOT"
          title10="FUDGE"
          title11="BLUEBERRY"
          info="Bringing together all the things we look for in an espresso, Sasaba from the Guji region of Ethiopia hits the spot! Fruity, sweet and creamy, this coffee shines with notes of apricot, blueberry & fudge."
        />
      </>
    ),
  },
  {
    path: "/la-floresta",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="LA FLORESTA"
          subtitle="COLOMBIA ESPRESSO"
          subColor="#99080c"
          price="15.50"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_ed05c73a-df70-4b52-b4d1-e2cd09308c5b_large.jpg?v=1622819214"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA"
          subtitle3="COLOMBIA"
          subtitle4="WASHED"
          subtitle5="TOLIMA"
          subtitle6="1800-1850 MASL"
          subtitle7="ALBERTO RAMOS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="APPLE"
          title10="CARAMEL"
          title11="HAZELNUT"
          info="La Floresta is the perfect wake up call. Full of crisp apple notes alongside gorgeously creamy hazelnuts and rich caramel, what more could we ask for!"
        />
      </>
    ),
  },
  {
    path: "/adela-reyes",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="ADELA REYES"
          subtitle="ETHIOPIAN ESPRESSO"
          subColor="#99080c"
          price="15.50"
          //PictureCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA"
          subtitle3="COLOMBIA"
          subtitle4="WASHED"
          subtitle5="TOLIMA"
          subtitle6="1800-1850 MASL"
          subtitle7="ALBERTO RAMOS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="BLACKBERRY"
          title10="CHOCOLATE"
          title11="HAZELNUT"
          info="Adela Reyes is the perfect wake up call. Full of crisp apple notes alongside gorgeously creamy hazelnuts and rich caramel, what more could we ask for!"
        />
      </>
    ),
  },
  {
    path: "/decaf-espresso",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="Decaf Espresso"
          subtitle="Espresso"
          subColor="#99080c"
          price="13.50"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Espresso-17_large.jpg?v=1623396688"
          //InfoCard1
          title1="Coffee"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="EL MERIDIANO"
          subtitle2="CATURRA, CASTILLO, TYPICA"
          subtitle3="COLOMBIA"
          subtitle4="WASHED, NATURAL EA"
          subtitle5="TOLIMA"
          subtitle6="1500-1900 MASL"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="MANDARIN"
          title10="BUTTERSCOTCH"
          title11="RAISIN"
          info="Sweet, round and delicious, Andino Sugarcane Ethyl Acetate Decaf does not disappoint! Sweet orange and butterscotch notes, rounded off perfectly with a hint of almond. Find out more here."
        />
      </>
    ),
  },
  {
    path: "/filtered-bean",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="Filtered Bean"
          subtitle="Seasonal Filter"
          subColor="#007442"
          price="12.50"
          //PictureCard
          image="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80"
          //InfoCard1
          title1="50%"
          title2="50%"
          title3="Country"
          title4="Country"
          title5="Region"
          title6="Region"
          title7="Process"
          title8="Process"
          subtitle1="LA ESTRELLA DEL OSTRO"
          subtitle2="SAN RAMON"
          subtitle3="COLOMBIA"
          subtitle4="NICARAGUA"
          subtitle5="HUILA"
          subtitle6="DIPILTO"
          subtitle7="WASHED"
          subtitle8="WASHED"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="ORANGE"
          title10="MILK CHOCOLATE"
          title11="ALMOND"
          info="Built on the same concept as our Red Brick Espresso Blend, The Filter Blend is seasonal, versatile and classic Square Mile. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
        />
      </>
    ),
  },
  {
    path: "/el-diamante",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="EL DIAMANTE"
          subtitle="Seasonal Blend"
          subColor="#007442"
          price="14.00"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_712ed7a9-2b42-4fe9-851d-846baff044ff_large.jpg?v=1618407214"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
          subtitle3="PERU"
          subtitle4="WASHED"
          subtitle5="SAN IGNACIO"
          subtitle6="1600-2000 MASL"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="FEBRUARY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="TANGERINE"
          title10="HONEY"
          title11="ALMOND"
          info="Built on the same concept as our Red Brick Espresso Blend, The Filter Blend is seasonal, versatile and classic Square Mile. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
        />
      </>
    ),
  },
  {
    path: "/dis-palo",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="DIS PALO"
          subtitle="Columbia Espresso"
          subColor="#007442"
          price="14.00"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_712ed7a9-2b42-4fe9-851d-846baff044ff_large.jpg?v=1618407214"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="PACHE, BOURBON"
          subtitle3="Columbia"
          subtitle4="WASHED"
          subtitle5="SAN IGNACIO"
          subtitle6="1600-2000 MASL"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="HONEY"
          title10="STRAWBERRY"
          title11="CHOCOLATE"
          info="Built on the same concept as our Red Brick Espresso Blend, The Dis Palo is seasonal, versatile and classic Square Mile. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
        />
      </>
    ),
  },
  {
    path: "/smart-dripper",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="SMART DRIPPER"
          // subtitle="Columbia Espresso"
          subColor="#007442"
          price="23.00"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Light-10_1024x1024.jpg?v=1600088640"
          //InfoCard1
          // title1=""
          // title2="Varieties"
          // title3="Country"
          // title4="Process"
          // title5="Region"
          // title6="Altitude"
          // title7="Producers"
          // title8="Landed"
          // subtitle1="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
          // subtitle2="PACHE, BOURBON"
          // subtitle3="Columbia"
          // subtitle4="WASHED"
          // subtitle5="SAN IGNACIO"
          // subtitle6="1600-2000 MASL"
          // subtitle7="VARIOUS SMALLHOLDERS"
          // subtitle8="MAY"
          //InfoCard2
          preTitle="Please note - We offer free shipping to all our UK orders."
          title9="DRIPPER"
          title10="EQUIPMENT"
          title11="COFFEE"
          // info="These great little filter coffee brewers offer the best of both brewing styles! Similar in shape to a pour over brew, the big difference here is that there is a stop tap at the bottom of the cone.  This means you can put your coffee in, pour your water over and steep for a desired amount of time.  To drain the cone simply place the brewer on top of your cup and it opens up the tap and drains out.  There is a small saucer for it to rest on to catch any drips, and a lid to keep the brew hot while steeping."
        />
      </>
    ),
  },
  {
    path: "/bookkisa",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="BOOKKISA"
          subtitle="ETHIOPIA"
          subColor="#007442"
          price="16.00"
          //PictureCard
          image="https://cdn.shopify.com/s/files/1/0017/1562/products/Coffee-SQUARE_46cf7ab0-a55f-4b14-92f8-75a91d38d74b_large.jpg?v=1623427231"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="GIBIRINNA, SERTO"
          subtitle3="ETHIOPIA"
          subtitle4="NATURAL"
          subtitle5="GUJI"
          subtitle6="2000-2100 MASL"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="MANGO"
          title10="RASPBERRY"
          title11="SYRUPY"
          info="We're excited to offer this fun, naturally processed coffee from Guji, Ethiopia. Packed with creamy mango and bright raspberry notes lifted by its delicious syrupy texture, Bookkisa is just perfect for the sunny days to come!"
        />
      </>
    ),
  },
  {
    path: "/el-dasto",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="EL DASTO"
          subtitle="COLUMBIA"
          subColor="#007442"
          price="14.00"
          //PictureCard
          image="https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
          subtitle3="COLUMBIA"
          subtitle4="WASHED"
          subtitle5="SAN IGNACIO"
          subtitle6="1600-2000 MAS"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="FEBRUARY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="CLEMENTINE"
          title10="BLUEBERRY"
          title11="CASHEW"
          info="Another fantastic coffee from Columbia, El Dasto has a perfect blend of sweetness!"
        />
      </>
    ),
  },
  {
    path: "/peretu",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="PERETU"
          subtitle="PERU"
          subColor="#007442"
          price="15.00"
          //PictureCard
          image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
          subtitle3="PERU"
          subtitle4="WASHED"
          subtitle5="SAN IGNACIO"
          subtitle6="1600-2000 MAS"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="FEBRUARY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="GRAPES"
          title10="CHOCOLATE"
          title11="BLACKCURRENT"
          info="Peruto is a perfect dark raosted Peruvian coffee with hints of chocolate and blackcurrent."
        />
      </>
    ),
  },
  {
    path: "/lultrina",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <>
        <ProductDescription
          //addToCart
          title="LULTRINA"
          subtitle="COLUMBIA"
          subColor="#007442"
          price="13.00"
          //PictureCard
          image="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          //InfoCard1
          title1="Weight"
          title2="Varieties"
          title3="Country"
          title4="Process"
          title5="Region"
          title6="Altitude"
          title7="Producers"
          title8="Landed"
          subtitle1="350G"
          subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
          subtitle3="COLUMBIA"
          subtitle4="WASHED"
          subtitle5="SAN COLUMBIA"
          subtitle6="1600-2000 MAS"
          subtitle7="VARIOUS SMALLHOLDERS"
          subtitle8="MAY"
          //InfoCard2
          preTitle="Tasting Notes"
          title9="APRICOT"
          title10="FUDGE"
          title11="BLACKCURRENT"
          info="A light, blonde blend that brings together the tones of apricot, fudge and blackcurrent to create a wonderful experience."
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
