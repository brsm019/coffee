import React from "react";
import "./CardNew.css";

/* 

TO DO:
Need to change image background
make text responsive 
Add link to new page or create a popup or buy now, need to decide

create template for smaller images

*/

const CardNew = () => {
  return (
    <>
      <div class="col-lg-3 col-md-6 col-sm-6 mb-4 mb-lg-0">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
          class="w-100 h-100 shadow-sm rounded mb-4"
          id="cardNew__image"
          alt=""
        />

        <a href="https://www.google.com/">
          <div class="mask">
            <div class="cardNew__text">
              <div class="cardNew__login__line">
                ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
              </div>
              <h1 class="cardNew__title">Sweetshop</h1>
              <div class="cardNew__login__line">
                {" "}
                ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂ ❂
              </div>
              <p class="cardNew__subtitle">Seasonal Espresso</p>
              <div class="cardNew__offer">
                <span class="cardNew__price">£11.00</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardNew;
