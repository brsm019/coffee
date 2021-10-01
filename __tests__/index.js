const { Builder, Capabilities, By, until, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
let opts = new chrome.Options();

(async function test() {
  let driver = await new Builder()
    .withCapabilities(caps)
    .forBrowser("chrome")
    // .setChromeOptions(opts.headless())
    .build();
  await driver.manage().window().maximize();
  await driver.get("http://localhost:3000/");

  //Function: Wait until element is located
  const locateElement = async (xpath) => {
    await driver.wait(
      until.elementLocated(By.xpath(xpath)),
      20000,
      "Timed out after 20 seconds",
      500
    );
  };

  //Function: Wait for element and then click that element
  const waitAndClick = async (xpath) => {
    await driver.findElement(By.xpath(xpath)).click();
  };

  await locateElement(
    "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div"
  );

  async function urlTest(url1, xpath, commonXpath) {
    try {
      console.log({ url1 });
      await locateElement(xpath);

      const originalWindow = await driver.getWindowHandle();
      assert((await driver.getAllWindowHandles()).length === 1);

      let x = await driver.findElement(By.xpath(xpath));
      const actions = driver.actions({ async: true });
      // Performs mouse move action onto the element
      await actions.move({ origin: x }).perform();
      // Perform context-click action on the element
      await actions.keyDown(Key.SHIFT).click(x).perform();
      await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        10000
      );
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      const newWindow = await driver.getWindowHandle();
      console.log({ originalWindow });
      console.log({ newWindow });

      await locateElement(commonXpath);

      const url2 = await driver.getCurrentUrl();
      console.log({ url2 });
      await assert.strictEqual(url1, url2);
      await driver.close();
      await driver.switchTo().window(originalWindow);
    } catch (err) {
      console.log(err);
    }
  }

  try {
    /* 
    
        Tests for homepage:
        Test all links on homepage go to right destination
   
   */

    //Homepage data
    const homeData = [
      {
        actualUrl: "http://localhost:3000/",
        xpath: "/html/body/div/div/div/div[1]/ul/li[1]/a",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/equipment",
        xpath: "/html/body/div/div/div/div[1]/ul/li[2]/a",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[2]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/login", //When unauthenticated
        xpath: "/html/body/div/div/div/div[1]/ul/li[3]/a",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/signup",
        xpath: "/html/body/div/div/div/div[2]/div/div/div[1]/a[1]",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/login",
        xpath: "/html/body/div/div/div/div[2]/div/div/div[1]/a[2]",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/login", //When unauthenticated
        xpath: "/html/body/div/div/div/div[2]/div/div/div[1]/a[3]",
        commonXpath:
          "/html/body/div/div/div/div[2]/div/div/div[3]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/redbrick",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/sweet-shop",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/decaf-espresso",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[3]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/sasaba",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[4]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/la-floresta",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[5]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/adela-reyes",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[6]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/filtered-bean",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[7]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      // {
      //   actualUrl: "http://localhost:3000/el-diamante",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[8]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/dis-palo",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[9]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/smart-dripper",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[10]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/bookkisa",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[11]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/el-dasto",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[12]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/peretu",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[13]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
      // {
      //   actualUrl: "http://localhost:3000/lultrina",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[14]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      // },
    ];

    for (let i = 0; i < homeData.length; i++) {
      await urlTest(
        homeData[i].actualUrl,
        homeData[i].xpath,
        homeData[i].commonXpath
      );
    }

    /* 
    
        Tests for equipment:
        Test all links on equipment go to right destination
   
   */

    const equipmentData = [
      {
        actualUrl: "http://localhost:3000/wilfa-grinder",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/fellow-kettle",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      },
      {
        actualUrl: "http://localhost:3000/pullman-tamper",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[3]/a/div/div/h1",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      },
      // {
      //   actualUrl: "http://localhost:3000/fellow-pitcher",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[4]/a/div/div",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      // },
      // {
      //   actualUrl: "http://localhost:3000/pullman-tool",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[5]/a/div/div/h1",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      // },
      // {
      //   actualUrl: "http://localhost:3000/pullman-black",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[6]/a/div/div/h1",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      // },
      // {
      //   actualUrl: "http://localhost:3000/pullman-basket",
      //   xpath:
      //     "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[7]/a/div/div/h1",
      //   commonXpath:
      //     "/html/body/div/div/div/div[2]/div[2]/div[3]/div[1]/div[1]/div/h3",
      // },
    ];

    await locateElement("/html/body/div/div/div/div[1]/ul/li[2]/a");
    await driver
      .findElement(By.xpath("/html/body/div/div/div/div[1]/ul/li[2]/a"))
      .click();

    for (let i = 0; i < equipmentData.length; i++) {
      await urlTest(
        equipmentData[i].actualUrl,
        equipmentData[i].xpath,
        equipmentData[i].commonXpath
      );
    }

    /* 
    
        Tests for logging into account:
        Login works correctyl and redirects to correct page
   
   */

    //Navigate to signing in

    await locateElement("/html/body/div/div/div/div[2]/div/div/div[1]/a[2]");

    await waitAndClick("/html/body/div/div/div/div[2]/div/div/div[1]/a[2]");

    const email = "selenium@gmail.com";
    const password = "seleniumTest!";
    const emailXpath =
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[3]/form/div[1]/input";
    const passwordXpath =
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[3]/form/div[2]/input";

    //Wait until page loads
    await locateElement("/html/body/div/div/div/div[2]/div/div/div[1]/a[2]");

    await driver.findElement(By.xpath(emailXpath)).sendKeys(email + Key.ENTER);
    await driver
      .findElement(By.xpath(passwordXpath))
      .sendKeys(password + Key.ENTER);

    //Redirected to the correct page
    const redBrickXpath =
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div";
    await locateElement(redBrickXpath);
    const curUrl = await driver.getCurrentUrl();
    assert.strictEqual(curUrl, "http://localhost:3000/");

    /* 
    
        Test buying a product 
   
   */

    await driver.findElement(By.xpath(redBrickXpath)).click();
    const addToBasketXpath =
      "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button";

    await waitAndClick(
      "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button"
    );
    const myCartXpath = "/html/body/div/div/div/div[2]/div[1]/a";

    await waitAndClick("/html/body/div/div/div/div[2]/div[1]/a");
    const checkoutXpath = "/html/body/div/div/div/div[2]/div/div/div[2]/button";
    await waitAndClick(checkoutXpath);
    const enterEmailXpath =
      "/html/body/div/div/div/div[2]/div/div[2]/div[3]/form/input";
    const deets = "424242424242424242424242424";

    await driver
      .findElement(By.xpath(enterEmailXpath))
      .sendKeys(email + Key.TAB);

    let card = await driver.findElement(By.id("card-element"));
    console.log({ card });
    await card.sendKeys(deets, Key.ENTER);

    const payNowXpath =
      "/html/body/div/div/div/div[2]/div/div[2]/div[3]/form/button/span";
    await waitAndClick(payNowXpath);
  } catch (e) {
    console.log(e);
  }
})();
