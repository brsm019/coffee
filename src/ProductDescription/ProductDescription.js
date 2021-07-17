//Red Brick Product

import React from "react";
import "./ProductDescription.css";
import Header from "../Components/Header/Header";
import AddToCartCard from "./AddToCartCard.js";
import PictureCard from "./PictureCard.js";
import InfoCard1 from "./InfoCard1.js";
import InfoCard2 from "./InfoCard2.js";
import Footer from "../Components/Footer/Footer";

const ProductDescription = ({
  id,
  title,
  description,
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
  preTitle2,
  title9,
  title10,
  title11,
  info,
  info2,
  width,
  hidden,
  eq,
}) => {
  return (
    <>
      <Header />
      <div class="productDescription__container">
        <div className="productDescription__grouping">
          <AddToCartCard
            id={id}
            title={title}
            subtitle={subtitle}
            subColor={subColor}
            price={price}
          />
          <PictureCard image={image} />
        </div>

        <div className="productDescription__grouping">
          <InfoCard1
            description={description}
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
            width={width}
            hidden={hidden}
            eq={eq}
          />
          <InfoCard2
            preTitle={preTitle}
            preTitle2={preTitle2}
            title9={title9}
            title10={title10}
            title11={title11}
            info={info}
            info2={info2}
            hidden={hidden}
            eq={eq}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDescription;
