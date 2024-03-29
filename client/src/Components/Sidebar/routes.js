import { createRoute } from "../../utils/createRoute";
import { v4 as uuidv4 } from "uuid";
import SignUp from "../../Pages/SignUp";
import ProductDescription from "../../ProductDescription/ProductDescription";
import Home from "../../Pages/Home";
import ShopEquipment from "../../Pages/ShopEquipment";
import Cart from "../../Pages/Cart";
import Login from "../../Pages/Login";
import Checkout from "../../Pages/Checkout";
import NoMatch from "../../Pages/NoMatch";
import { Redirect } from "react-router";

let routes = [
  createRoute("/signup", false, <SignUp />),
  createRoute("/", true, <Home />),
  createRoute("/equipment", true, <ShopEquipment />),
  createRoute("/mycart", true, <Cart />),
  createRoute("/login", true, <Login />),
  createRoute("/equipment", true, <SignUp />),
  createRoute(
    "/redbrick",
    true,
    <ProductDescription
      id={uuidv4()}
      title="Red Brick"
      subtitle="Seasonal Espresso"
      subColor="#99080c"
      price="11.00"
      image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenverbeverage.com%2Fwp-content%2Fuploads%2F2019%2F03%2FMocha_Cappuccino_2048x.jpg&f=1&nofb=1"
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
      preTitle="Tasting Notes"
      title9="Cherry"
      title10="Milk Chocolate"
      title11="Praline"
      info="As the crops change, so do the components of our Red Brick, highlighting harvest cycles and celebrating the seasonality of coffee. We've combined the great fruit qualities from each component, and allowed the sweetness to shine."
    />
  ),
  createRoute(
    "/sweet-shop",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="Sweetshop"
      subtitle="Seasonal Espresso"
      subColor="#99080c"
      price="16.00"
      image="https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80"
      title1="2/3"
      title2="1/3"
      title3="Country"
      title4="Country"
      title5="Region"
      title6="Region"
      title7="Process"
      title8="Process"
      subtitle1="WOSASA"
      subtitle2="EL RUBI"
      subtitle3="ETHIOPIA"
      subtitle4="COLUMBIA"
      subtitle5="GUJI"
      subtitle6="HUILA"
      subtitle7="NATURAL"
      subtitle8="WASHED"
      preTitle="Tasting Notes"
      title9="Honey"
      title10="Milk Chocolate"
      title11="Walnut"
      info="The idea behind our Sweetshop blend is simple: combine sweet and characterful coffee to create a fun, wildly complex and fruit-driven espresso. This isn’t about balance and it certainly isn’t about tradition. This is about cramming as much fruit and fun into the cup as possible. We want an espresso that doesn’t taste like anything else."
    />
  ),
  createRoute(
    "/sasaba",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="SASABA ADVAR"
      subtitle="ETHIOPIA ESPRESSO"
      subColor="#99080c"
      price="13.50"
      image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="REGIONAL LANDRACES"
      subtitle3="ETHIOPIA"
      subtitle4="WASHED"
      subtitle5="GUJI"
      subtitle6="2000-2150 MASL"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="APRICOT"
      title10="FUDGE"
      title11="BLUEBERRY"
      info="Bringing together all the things we look for in an espresso, Sasaba from the Guji region of Ethiopia hits the spot! Fruity, sweet and creamy, this coffee shines with notes of apricot, blueberry & fudge."
    />
  ),
  createRoute(
    "/la-floresta",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="LA FLORESTA"
      subtitle="COLOMBIA ESPRESSO"
      subColor="#99080c"
      price="15.50"
      image="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA"
      subtitle3="COLOMBIA"
      subtitle4="WASHED"
      subtitle5="TOLIMA"
      subtitle6="1800-1850 MASL"
      subtitle7="ALBERTO RAMOS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="APPLE"
      title10="CARAMEL"
      title11="HAZELNUT"
      info="La Floresta is the perfect wake up call. Full of crisp apple notes alongside gorgeously creamy hazelnuts and rich caramel, what more could we ask for!"
    />
  ),
  createRoute(
    "/adela-reyes",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="ADELA REYES"
      subtitle="ETHIOPIAN ESPRESSO"
      subColor="#99080c"
      price="15.50"
      image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA"
      subtitle3="COLOMBIA"
      subtitle4="WASHED"
      subtitle5="TOLIMA"
      subtitle6="1800-1850 MASL"
      subtitle7="ALBERTO RAMOS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="BLACKBERRY"
      title10="CHOCOLATE"
      title11="HAZELNUT"
      info="Adela Reyes is the perfect wake up call. Full of crisp apple notes alongside gorgeously creamy hazelnuts and rich caramel, what more could we ask for!"
    />
  ),
  createRoute(
    "/decaf-espresso",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="Decaf Espresso"
      subtitle="Espresso"
      subColor="#99080c"
      price="13.50"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Espresso-17_large.jpg?v=1623396688"
      title1="Coffee"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="EL MERIDIANO"
      subtitle2="CATURRA, CASTILLO, TYPICA"
      subtitle3="COLOMBIA"
      subtitle4="WASHED, NATURAL EA"
      subtitle5="TOLIMA"
      subtitle6="1500-1900 MASL"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="MANDARIN"
      title10="BUTTERSCOTCH"
      title11="RAISIN"
      info="Sweet, round and delicious, Andino Sugarcane Ethyl Acetate Decaf does not disappoint! Sweet orange and butterscotch notes, rounded off perfectly with a hint of almond. Find out more here."
    />
  ),
  createRoute(
    "/filtered-bean",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="Filtered Bean"
      subtitle="Seasonal Filter"
      subColor="#007442"
      price="12.50"
      image="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80"
      title1="50%"
      title2="50%"
      title3="Country"
      title4="Country"
      title5="Region"
      title6="Region"
      title7="Process"
      title8="Process"
      subtitle1="LA ESTRELLA DEL OSTRO"
      subtitle2="SAN RAMON"
      subtitle3="COLOMBIA"
      subtitle4="NICARAGUA"
      subtitle5="HUILA"
      subtitle6="DIPILTO"
      subtitle7="WASHED"
      subtitle8="WASHED"
      preTitle="Tasting Notes"
      title9="ORANGE"
      title10="MILK CHOCOLATE"
      title11="ALMOND"
      info="Built on the same concept as our Red Brick Espresso Blend, The Filter Blend is seasonal, versatile and classic Colmore Row. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
    />
  ),
  createRoute(
    "/el-diamante",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="EL DIAMANTE"
      subtitle="Seasonal Blend"
      subColor="#007442"
      price="14.00"
      image="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
      subtitle3="PERU"
      subtitle4="WASHED"
      subtitle5="SAN IGNACIO"
      subtitle6="1600-2000 MASL"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="FEBRUARY"
      preTitle="Tasting Notes"
      title9="TANGERINE"
      title10="HONEY"
      title11="ALMOND"
      info="Built on the same concept as our Red Brick Espresso Blend, The Filter Blend is seasonal, versatile and classic Colmore Row. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
    />
  ),
  createRoute(
    "/dis-palo",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="DIS PALO"
      subtitle="Columbia Espresso"
      subColor="#007442"
      price="14.00"
      image="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="PACHE, BOURBON"
      subtitle3="Columbia"
      subtitle4="WASHED"
      subtitle5="SAN IGNACIO"
      subtitle6="1600-2000 MASL"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="HONEY"
      title10="STRAWBERRY"
      title11="CHOCOLATE"
      info="Built on the same concept as our Red Brick Espresso Blend, The Dis Palo is seasonal, versatile and classic Colmore Row. Clean, balanced and medium-bodied; a kind, welcoming coffee to wake-up to The Filter Blend offers the perfect all-day every-day brew and embodies all we love about speciality coffee. An absolute delight, you’ll want to keep a bag in the cupboard to always have delicious coffee in the house."
    />
  ),
  createRoute(
    "/smart-dripper",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="SMART DRIPPER"
      subColor="#007442"
      price="23.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Light-10_1024x1024.jpg?v=1600088640"
      preTitle="Please note - We offer free shipping to all our UK orders."
      title9="DRIPPER"
      title10="EQUIPMENT"
      title11="COFFEE"
    />
  ),
  createRoute(
    "/bookkisa",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="BOOKKISA"
      subtitle="ETHIOPIA"
      subColor="#007442"
      price="16.00"
      image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="GIBIRINNA, SERTO"
      subtitle3="ETHIOPIA"
      subtitle4="NATURAL"
      subtitle5="GUJI"
      subtitle6="2000-2100 MASL"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="MANGO"
      title10="RASPBERRY"
      title11="SYRUPY"
      info="We're excited to offer this fun, naturally processed coffee from Guji, Ethiopia. Packed with creamy mango and bright raspberry notes lifted by its delicious syrupy texture, Bookkisa is just perfect for the sunny days to come!"
    />
  ),
  createRoute(
    "/el-dasto",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="EL DASTO"
      subtitle="COLUMBIA"
      subColor="#007442"
      price="14.00"
      image="https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
      subtitle3="COLUMBIA"
      subtitle4="WASHED"
      subtitle5="SAN IGNACIO"
      subtitle6="1600-2000 MAS"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="FEBRUARY"
      preTitle="Tasting Notes"
      title9="CLEMENTINE"
      title10="BLUEBERRY"
      title11="CASHEW"
      info="Another fantastic coffee from Columbia, El Dasto has a perfect blend of sweetness!"
    />
  ),
  createRoute(
    "/peretu",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PERETU"
      subtitle="PERU"
      subColor="#007442"
      price="15.00"
      image="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
      subtitle3="PERU"
      subtitle4="WASHED"
      subtitle5="SAN IGNACIO"
      subtitle6="1600-2000 MAS"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="FEBRUARY"
      preTitle="Tasting Notes"
      title9="GRAPES"
      title10="CHOCOLATE"
      title11="BLACKCURRENT"
      info="Peruto is a perfect dark raosted Peruvian coffee with hints of chocolate and blackcurrent."
    />
  ),
  createRoute(
    "/lultrina",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="LULTRINA"
      subtitle="COLUMBIA"
      subColor="#007442"
      price="13.00"
      image="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      title1="Weight"
      title2="Varieties"
      title3="Country"
      title4="Process"
      title5="Region"
      title6="Altitude"
      title7="Producers"
      title8="Landed"
      subtitle1="350G"
      subtitle2="CATURRA, TYPICA, PACHE, BOURBON"
      subtitle3="COLUMBIA"
      subtitle4="WASHED"
      subtitle5="SAN COLUMBIA"
      subtitle6="1600-2000 MAS"
      subtitle7="VARIOUS SMALLHOLDERS"
      subtitle8="MAY"
      preTitle="Tasting Notes"
      title9="APRICOT"
      title10="FUDGE"
      title11="BLACKCURRENT"
      info="A light, blonde blend that brings together the tones of apricot, fudge and blackcurrent to create a wonderful experience."
    />
  ),
  createRoute(
    "/wilfa-grinder",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="WILFA SVART GRINDER"
      subtitle=""
      price="130.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/files/wilfa_feat1.jpg?v=9595446469403274234"
      title1="Perfect for grinding coffee to use with your Aeropress, Chemex, V60 or other home filter brewers. The burr grinder features easy to use grind adjustment that's built right into the 250g hopper and a timed grinding option so that you can easily grind the same amount of coffee beans each time (which we love). It's also quick to dismantle, making it easy to keep nice and clean. Please note, comes with an adaptor for UK plug sockets."
      preTitle="WILFA COFFEE GRINDER SPECS"
      preTitle2="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      info="UV protected 250g hopper capacity. Measures 170 x 285 x 130mm for a small footprint. Cool running, slow speed DC motor ensures delicate aroma compounds aren't lost during grinding."
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/fellow-kettle",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="FELLOW STAGG EKG ELECTRIC KETTLE"
      subtitle=""
      price="145.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/files/Stag_EKG_feat.jpg?v=835009315080376446"
      title1="Looking to upgrade your brewing kit? Beautiful and functional, The Stagg EKG electric kettle by Fellow the answer! With its clever, counterbalanced wishbone handle, the Stag EKG sits on a compact base and features - a precision pour spout, variable temperature control, 60 minute hold time, and LCD display. The best part? Stagg looks fantastic on a shelf, making it a welcome addition to any kitchen."
      preTitle="KEY FEATURES"
      preTitle2="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      info="Accurate temperature control to within 1 degree using a PID controller
  
  Fast heat time
  
  A 60-minute hold mode that will keep the kettle warm
  
  Brew Stopwatch
  
  Temperature mode using either celsius or Fahrenheit"
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/pullman-tamper",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PULLMAN OAK TAMPER"
      subtitle=""
      price="100.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-143_1080x1080_dce57860-ce38-4cb5-b0c1-8e29de96e44a_large.jpg?v=1614614119"
      title1="Weighty and sturdy, but beautifully elegant, the Pullman is the tamper of choice for many on our team. With an ergonomically shaped oak handle, choose between the BigStep or Original base for even pressure and delicious espresso."
      preTitle="Original Base - Diameter 58.40mm"
      preTitle2="BigStep Base - Diameter 58.55mm"
      info="The Pullman original base is a precision-machined stainless steel tamper base with TrueTamp rings for a consistent and level tamp. With a synthetic rubber compression zone for maximum comfort, making delicious espresso was never this easy."
      info2="Covering a large surface area within the basket, the stepped edge of the BigStep reduces vacuum potential when tamping."
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/fellow-pitcher",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="FELLOW EDDY MILK PITCHER"
      subtitle=""
      price="50.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-072_1080x1080_ce9bb5aa-af32-4841-9ea5-0c1fe8d2ab4f_large.jpg?v=1614614613"
      title1="A beautiful, yet wonderfully handy object, the 12 oz graphite Eddy Milk Pitcher spins silky smooth micro-foam, thanks to its tapered body. Like writing with a fine-tip fountain pen, its uniquely sharp crease and fluted spout allow for a precise pour while its open-ended ribbon handle offers a comfortable grip for greater control and on point latte art."
      preTitle="FEATURES"
      preTitle2="WE OFFER COMPLIMENTARY SHIPPING ON ALL UK ORDERS"
      info="Measurement Aid
  Fluted spout for ultimate precision.
  Sharp Crease
  Ribbon Handle
  Tapered Body"
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/pullman-tool",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PULLMAN CHISEL REDISTRIBUTION TOOL"
      subtitle=""
      price="125.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/pullman_chisel_life_1_large.jpg?v=1614614379"
      title1="The quickest way to more balanced and higher extraction is an evenly dense coffee-puck. As a part of the Pullman system, the Chisel redistribution tool helps you even out your puck surface before tamping for the most consistently delicious results."
      preTitle=""
      preTitle2=""
      info=""
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/pullman-black",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PULLMAN BLACK TAMPER"
      subtitle=""
      price="90.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-133_1080x1080_74ac975f-e7c2-49f1-91b5-d7465b086caf_large.jpg?v=1614614285"
      title1="Weighty and sturdy, but beautifully elegant, the Pullman is the tamper of choice for many on our team. With an ergonomically shaped black aluminium handle, choose between the BigStep or Original base for even pressure and delicious espresso."
      preTitle="Original Base - Diameter 58.40mm"
      preTitle2="BigStep Base - Diameter 58.55mm"
      info="The Pullman original base is a precision-machined stainless steel tamper base with TrueTamp rings for a consistent and level tamp. With a synthetic rubber compression zone for maximum comfort, making delicious espresso was never this easy."
      info2="Covering a large surface area within the basket, the stepped edge of the BigStep reduces vacuum potential when tamping."
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/pullman-basket",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PULLMAN BASKET"
      subtitle=""
      price="20.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-164_1080x1080_a1db6a5c-e97e-4a99-ac99-a89fee06025c_large.jpg?v=1614614742"
      title1="At 58mm in diameter, the Pullman basket is the perfect fit for the Pullman tamper. With 876 precision cut holes for maximised extraction, the baskets are available in two sizes;
  17 - 19g or 20 - 22g."
      preTitle="FEATURES"
      preTitle2=""
      info="876 precision cut holes (143 more than the industry standard)
  Fits big base tampers perfectly
  Smaller hole diameter
  Maximise your extraction
  Polished, no burrs, no scratches, no misshaped holes"
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "ridgeless-basket",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="PULLMAN RIDGELESS VST BASKET"
      subtitle=""
      price="28.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Dark-19_large.jpg?v=1529935146"
      title1="This is the espresso machine basket developed by VST. 
  
  Each basket has been designed and created in such a way that it guarantees a size, distribution and shape of holes perfectly suited to extract the chosen amount of coffee. 
  
  In essence, this means that you can now grind finely enough to properly extract your dose of coffee, while still maintaining a desirable flow rate and brew time of approximately 25-30 seconds.
  
  There is more information here."
      preTitle=""
      preTitle2=""
      info=""
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/wilfa-brewer",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="WILFA CLASSIC+ BREWER"
      subtitle=""
      price="150.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Hero_00d0bf74-0854-4f5a-b832-0dd7a4e1c439_large.jpg?v=1600090686"
      title1="We've been looking for the perfect electric filter coffee brewer to stock for a long time and feel we have finally found it with the Wilfa Classic+ Brewer. Perfect for the home or office the Classic+ can produce 1-10 cups of tasty coffee in around 5 minutes. 
  
  With a brewing capacity of 1 Litre, accurate brewing temperature, adjustable flow brewing cone with shut off valve, cleaning indicator and a hot plate to keep brew warm in the glass decanter, this really is an all-around great brewer. "
      preTitle="WILFA CLASSIC+ BREWER SPECS"
      preTitle2=""
      info="Measuring 550 x 170 x 332mm for a relatively small countertop footprint. Die-cast aluminium body construction with black finish and glass server.
  
  Compatible with the Filtropa papers, not included."
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/fellow-pitcher",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="FELLOW EDDY MILK PITCHER"
      subtitle=""
      price="50.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/SQM-072_1080x1080_ce9bb5aa-af32-4841-9ea5-0c1fe8d2ab4f_large.jpg?v=1614614613"
      title1="A beautiful, yet wonderfully handy object, the 12 oz graphite Eddy Milk Pitcher spins silky smooth micro-foam, thanks to its tapered body. Like writing with a fine-tip fountain pen, its uniquely sharp crease and fluted spout allow for a precise pour while its open-ended ribbon handle offers a comfortable grip for greater control and on point latte art."
      preTitle="FEATURES"
      preTitle2="WE OFFER COMPLIMENTARY SHIPPING ON ALL UK ORDERS"
      info="Measurement Aid
  Fluted spout for ultimate precision.
  Sharp Crease
  Ribbon Handle
  Tapered Body"
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/v60-kit",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="V60 SIMPLY GLASS BREWING KIT"
      subtitle=""
      price="32.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/files/SQM-042_square_1.jpg?v=15493489480238712228"
      title1="WOffering everything you need to brew delicious coffee, the Hario V60 Simply Glass Brewing Kit is a stylish and practical addition to any kitchen.
  
  Versatile with a 1-4 cup capacity, the box includes a 2 cup Glass Dripper, V60 Glass Server, V60 filters and a measuring spoon."
      preTitle="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      preTitle2=""
      info=""
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/hario-scale",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="HARIO DRIP SCALE"
      subtitle=""
      price="55.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Light-3_large.jpg?v=1583490548"
      title1="The Hario Drip Scale is the perfect partner for brewing delicious coffee at home. Accurate scales and the built in timer ensure you keep within your brew parameters.
  
  Scales measure in 0.1 gram increments up to 200 grams, 0.5 gram increments up to 500 grams, then 1 gram increments from 500 grams - 2000 grams."
      preTitle=""
      preTitle2="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      info="Touch sensitive buttons and hold to reset functions improve usability and unit will automatically power off after 5 minutes of no use."
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/stagg-kettle",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="FELLOW STAGG POUR-OVER KETTLE"
      subtitle=""
      price="70.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Stag_silver_large.jpg?v=1605176113"
      title1="Beautiful and functional, The Stagg Pour-Over Kettle by Fellow is a must-have addition to your brewing set-up.
  
  Thanks to a clever, counterbalanced wishbone handle a steady, consistent pour is virtually guaranteed. Easy to read, its built-in brew thermometer will improve your pour-over brews no end.
  
  The best part? Stagg looks fantastic on a shelf, making it a welcome addition to any kitchen."
      preTitle="OPLEASE NOTE SHIPPING IS INCLUDED ON ALL UK EQUIPMENT ORDERS."
      preTitle2=""
      info=""
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/huskee-cup",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="HUSKEE CUP"
      subtitle=""
      price="14.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/Huskee4_large.jpg?v=1600089337"
      title1="The Huskee Cup is the reusable product you have been searching for to minimise your waste for takeaway and travel coffee. A beautifully designed cup with sustainability at its heart utilising coffee husk, an organic waste material produced from the milling of coffee. 
  
  The materials thermal properties keep your drink hot while the fins provide grip and protect your hand from heat. The Huskee Cup is in it for the long haul allowing you many years of constant use; it won’t crack or chip easily and is dishwasher safe."
      preTitle=""
      preTitle2="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      info="Cups come with ventilated lid with an ideal flow rate for drinking on the go.
  
  Available in 6oz (170ml) or 8oz (227ml) sizes in charcoal or natural.
  
  Approved food safe, BPA free polypropylene mixed with coffee husk."
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute(
    "/aerobie-aeropress",
    true,
    <ProductDescription
      //addToCart
      id={uuidv4()}
      title="AEROBIE AEROPRESS"
      subtitle=""
      price="30.00"
      image="https://cdn.shopify.com/s/files/1/0017/1562/products/AeroPressInsta_large.jpg?v=1619621450"
      title1="The full immersion AeroPress by Aerobie™ is a simple and easy to use brewing technique giving a lovely clean cup with little fuss. Whether using it at home or whilst travelling it is a perfect partner to brew with.
  
  Comes with 350 paper filters which need a good rinse before brewing, stirrer, measure and funnel. 
  
  Ground coffee should be finer than french press but coarser than espresso, and of course freshly ground.
  
  Experiment with different brewing techniques and water temperature's to get the best results."
      preTitle="PLEASE NOTE - WE OFFER FREE SHIPPING ON ALL UK ORDERS."
      preTitle2=""
      info=""
      info2=""
      width="none"
      hidden="none"
      eq="true"
    />
  ),
  createRoute("/checkout", true, <Checkout />),
  createRoute("*", false, <NoMatch />),
];

let unAuthedRoute = [
  {
    path: "/mycart",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
      <div>
        <Cart />
      </div>
    ),
  },
];

export { routes, unAuthedRoute };
