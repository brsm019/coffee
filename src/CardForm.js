import React from "react";
import CardLarge from "./CardLarge";

import "./CardForm.css";
import CardMedium from "./CardMedium";
import CardSmall from "./CardSmall";

const CardForm = () => {
  return (
    <div className="cardform">
      <div class="row">
        <>
          <CardLarge
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
            link="/redbrick"
            title="Red Brick"
            subtitle="Seasonal Espresso"
            price="£11.00"
          />
          <CardMedium
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="/sweetshop"
            title="Sweetshop"
            subtitle="Seasonal Espresso"
            price="£16.00"
            subColor="#99080c"
          />
          <CardMedium
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Decaf"
            subtitle="Espresso"
            price="£13.50"
            subColor="#99080c"
          />
        </>

        <>
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Sasaba"
            subtitle="Ethiopian Espresso"
            price="£13.50"
            subColor="#99080c"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="La Floresta"
            subtitle="Columbian Espresso"
            price="£15.50"
            subColor="#99080c"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Adela Reyes"
            subtitle="Ethiopian Espresso"
            price="£15.50"
            subColor="#99080c"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Filtered Bean"
            subtitle="Seasonal Filter"
            price="£12.50"
            subColor="#99080c"
          />
        </>

        <>
          <CardMedium
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="El Diamante"
            subtitle="Peru"
            price="£14.00"
            subColor="#0d57079a"
          />
          <CardMedium
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Dis Palo"
            subtitle="Columbia Espresso"
            price="£14.00"
            subColor="#0d57079a"
          />
          <CardLarge
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Light-10_1024x1024.jpg?v=1600088640"
            link="www.google.com"
            title="Smart Dripper"
            subtitle=""
            price="£16.00"
          />
        </>

        <>
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Bookkisa"
            subtitle="Ethiopia Espresso"
            price="£16.00"
            subColor="#0d57079a"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Aronas"
            subtitle="Seasonal Espresso"
            price="£14.50"
            subColor="#0d57079a"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Peretu"
            subtitle="Peruvian Espresso"
            price="£13.50"
            subColor="#0d57079a"
          />
          <CardSmall
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fplain-white-background.jpg&f=1&nofb=1"
            link="www.google.com"
            title="Lultrina"
            subtitle="Columbian Espresso"
            price="£13.50"
            subColor="#0d57079a"
          />
        </>
      </div>
      ;
    </div>
  );
};

export default CardForm;
