import React from "react";
import "./PictureCard.css";

const PictureCard = ({ image }) => {
  return (
    <>
      <img class="pictureCard__container" src={image} alt="" />
    </>
  );
};

export default PictureCard;
