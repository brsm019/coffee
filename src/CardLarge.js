import React from "react";
import "./CardLarge.css";
import CardNew from "./CardNew";
import SignUp from "./SignUp";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardLarge = () => {
  return (
    <>
      <div class="col-lg-6 col-md-12 col-sm-12 mb-4 mb-lg-0">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
          class="w-100 h-100 shadow-1-strong rounded mb-4"
          id="cardlarge__image"
          alt=""
        />

        <a href="https://www.google.com/">
          <div class="mask">
            <div class="cardLarge__text">
              <div class="cardLarge__feature__logo"></div>
              <div class="cardLarge__login__line">-----------------</div>
              <h1 class="cardLarge__title">Red Brick</h1>
              <div class="cardLarge__login__line">-----------------</div>
              <p class="cardLarge__subtitle">Seasonal Espresso</p>
              <div class="cardLarge__offer">
                <span class="cardLarge__price">£11.00</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          id="cardlarge__small"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          class="w-100 h-50 shadow-sm rounded mb-4"
          alt=""
        />

        <img
          id="cardlarge__small"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          class="w-100 shadow-sm rounded mb-4"
          alt=""
        />
      </div> */}

      <CardNew />

      <CardNew />

      {/* <CardNew /> */}

      {/* <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          id="cardlarge__small"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          class="w-100 h-50 shadow-sm rounded mb-4"
          alt=""
        />
        <img
          id="cardlarge__small"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          class="w-100 shadow-sm rounded mb-4"
          alt=""
        />
      </div> */}
    </>
  );
};

export default CardLarge;
