import React from "react";
import "./ProductDescription.css";
import Header from "../Header";
import AddToCartCard from "./AddToCartCard.js";
import PictureCard from "./PictureCard.js";
import InfoCard1 from "./InfoCard1.js";
import InfoCard2 from "./InfoCard2.js";
const ProductDescription = () => {
  return (
    <>
      <Header />
      <div class="productDescription__container">
        <div className="productDescription__grouping">
          <AddToCartCard />
          <PictureCard />
        </div>

        <div className="productDescription__grouping">
          <InfoCard1 />
          <InfoCard2 />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
