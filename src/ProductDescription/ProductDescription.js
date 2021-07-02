//Red Brick Product

import React from "react";
import "./ProductDescription.css";
import Header from "../Header";
import AddToCartCard from "./AddToCartCard.js";
import PictureCard from "./PictureCard.js";
import InfoCard1 from "./InfoCard1.js";
import InfoCard2 from "./InfoCard2.js";
import Footer from "../Footer/Footer";
const ProductDescription = () => {
  return (
    <>
      <Header />
      <div class="productDescription__container">
        <div className="productDescription__grouping">
          <AddToCartCard
            title="Red Brick"
            subtitle="Seasonal Espresso"
            subColor="#99080c"
            price="11.00"
          />
          <PictureCard image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1" />
        </div>

        <div className="productDescription__grouping">
          <InfoCard1
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
          />
          <InfoCard2
            preTitle="Tasting Notes"
            title1="Cherry"
            title2="Milk Chocolate"
            title3="Praline"
            info="As the crops change, so do the components of our Red Brick,
          highlighting harvest cycles and celebrating the seasonality of coffee.
          We've combined the great fruit qualities from each component, and
          allowed the sweetness to shine."
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDescription;
