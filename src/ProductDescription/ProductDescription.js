//Red Brick Product

import React from "react";
import "./ProductDescription.css";
import Header from "../Header";
import AddToCartCard from "./AddToCartCard.js";
import PictureCard from "./PictureCard.js";
import InfoCard1 from "./InfoCard1.js";
import InfoCard2 from "./InfoCard2.js";
import Footer from "../Footer/Footer";
const ProductDescription = ({
  title,
  subtitle,
  subColor,
  price,
  image,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  subtitle7,
  subtitle8,
  preTitle,
  title9,
  title10,
  title11,
  info,
}) => {
  return (
    <>
      <Header />
      <div class="productDescription__container">
        <div className="productDescription__grouping">
          <AddToCartCard
            title={title}
            subtitle={subtitle}
            subColor={subColor}
            price={price}
          />
          <PictureCard image={image} />
        </div>

        <div className="productDescription__grouping">
          <InfoCard1
            title1={title1}
            title2={title2}
            title3={title3}
            title4={title4}
            title5={title5}
            title6={title6}
            title7={title7}
            title8={title8}
            subtitle1={subtitle1}
            subtitle2={subtitle2}
            subtitle3={subtitle3}
            subtitle4={subtitle4}
            subtitle5={subtitle5}
            subtitle6={subtitle6}
            subtitle7={subtitle7}
            subtitle8={subtitle8}
          />
          <InfoCard2
            preTitle={preTitle}
            title9={title9}
            title10={title10}
            title11={title11}
            info={info}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDescription;
