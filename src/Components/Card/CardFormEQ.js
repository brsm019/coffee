import React from "react";
import CardLarge from "./CardLarge";

import "./CardFormEQ.css";
import CardMedium from "./CardMedium";
import CardSmall from "./CardSmall";

const CardFormEQ = () => {
  return (
    <div className="cardformeq">
      <div class="row">
        <>
          <CardLarge
            image="https://cdn.shopify.com/s/files/1/0017/1562/files/wilfa_feat1.jpg?v=9595446469403274234"
            link="/wilfa-grinder"
            title="WILFA SVART GRINDER"
            subtitle=""
            price="£130.00"
          />
          <CardMedium
            image="https://cdn.shopify.com/s/files/1/0017/1562/files/Stag_EKG_feat.jpg?v=835009315080376446"
            link="/fellow-kettle"
            textColor="white"
            title="FELLOW STAGG EKG ELECTRIC KETTLE"
            subtitle=""
            price="£145.00"
            // subColor="#99080c"
          />
          <CardMedium
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-143_1080x1080_dce57860-ce38-4cb5-b0c1-8e29de96e44a_large.jpg?v=1614614119"
            link="/pullman-tamper"
            textColor="white"
            title="PULLMAN OAK TAMPER"
            subtitle=""
            price="£100.00"
            // subColor="#99080c"
          />
        </>

        <>
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-072_1080x1080_ce9bb5aa-af32-4841-9ea5-0c1fe8d2ab4f_large.jpg?v=1614614613"
            link="/fellow-pitcher"
            textColor="white"
            title="FELLOW EDDY MILK PITCHER"
            subtitle=""
            price="£50.00"
            // subColor="#99080c"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/pullman_chisel_life_1_large.jpg?v=1614614379"
            link="/pullman-tool"
            textColor="white"
            title="PULLMAN CHISEL REDISTRIBUTION TOOL"
            subtitle=""
            price="£125.00"
            // subColor="#99080c"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-133_1080x1080_74ac975f-e7c2-49f1-91b5-d7465b086caf_large.jpg?v=1614614285"
            link="/pullman-black"
            textColor="white"
            title="PULLMAN BLACK TAMPER"
            subtitle=""
            price="£90.00"
            // subColor="#99080c"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-164_1080x1080_a1db6a5c-e97e-4a99-ac99-a89fee06025c_large.jpg?v=1614614742"
            link="/pullman-basket"
            textColor="white"
            title="PULLMAN BASKET"
            subtitle=""
            price="£20.00"
            // subColor="#007442"
          />
        </>

        <>
          <CardMedium
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Dark-19_large.jpg?v=1529935146"
            link="/ridgeless-basket"
            textColor="white"
            title="PULLMAN RIDGELESS VST BASKET"
            subtitle=""
            price="£28.00"
            // subColor="#0d57079a"
          />
          <CardMedium
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Hero_00d0bf74-0854-4f5a-b832-0dd7a4e1c439_large.jpg?v=1600090686"
            link="/wilfa-brewer"
            textColor="white"
            title="WILFA CLASSIC+ BREWER"
            subtitle=""
            price="£150.00"
            // subColor="#0d57079a"
          />
          <CardLarge
            image="https://cdn.shopify.com/s/files/1/0017/1562/files/SQM-042_square_1.jpg?v=15493489480238712228"
            link="/v60-kit"
            title="V60 SIMPLY GLASS BREWING KIT"
            subtitle=""
            price="£32.00"
          />
        </>

        <>
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Light-3_large.jpg?v=1583490548"
            link="/hario-scale"
            textColor="white"
            title="HARIO DRIP SCALE"
            subtitle=""
            price="£55.00"
            // subColor="#0d57079a"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Stag_silver_large.jpg?v=1605176113"
            link="/stagg-kettle"
            textColor="white"
            title="FELLOW STAGG POUR-OVER KETTLE"
            subtitle=""
            price="£70.00"
            // subColor="#0d57079a"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/Huskee4_large.jpg?v=1600089337"
            link="/huskee-cup"
            textColor="white"
            title="HUSKEE CUP"
            subtitle=""
            price="£14.00"
            // subColor="#0d57079a"
          />
          <CardSmall
            image="https://cdn.shopify.com/s/files/1/0017/1562/products/AeroPressInsta_large.jpg?v=1619621450"
            link="/aerobie-aeropress"
            textColor="white"
            title="AEROBIE AEROPRESS"
            subtitle=""
            price="£30.00"
            // subColor="#0d57079a"
          />
        </>
      </div>
      ;
    </div>
  );
};

export default CardFormEQ;
