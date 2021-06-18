import React from "react";
import CardLarge from "./CardLarge";
import CardSmall from "./CardSmall";
import "./CardForm.css";

const CardForm = () => {
  return (
    <div className="cardform">
      <div class="row">
        <CardLarge />
        <CardSmall />
      </div>
      ;
    </div>
  );
};

export default CardForm;
