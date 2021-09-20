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

  await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div"
      )
    ),
    20000,
    "Timed out after 20 seconds",
    500
  );

  async function urlTest(url1, xpath, commonXpath) {
    try {
      console.log({ url1 });
      await driver.wait(
        until.elementLocated(By.xpath(xpath)),
        20000,
        "Timed out after 20 seconds",
        500
      );

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

      await driver.wait(
        until.elementLocated(By.xpath(commonXpath)),
        10000,
        "Timed out after 10s",
        500
      );

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
      {
        actualUrl: "http://localhost:3000/el-diamante",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[8]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/dis-palo",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[9]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/smart-dripper",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[10]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/bookkisa",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[11]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/el-dasto",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[12]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/peretu",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[13]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
      {
        actualUrl: "http://localhost:3000/lultrina",
        xpath:
          "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[14]/a/div/div",
        commonXpath:
          "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button",
      },
    ];

    for (let i = 0; i < homeData.length; i++) {
      await urlTest(
        homeData[i].actualUrl,
        homeData[i].xpath,
        homeData[i].commonXpath
      );
    }

    //Fix error:- MoveTargetOutOfBoundsError: move target out of bounds, selenium doesn't select elements of screen, need to create scroll functionality or something alike.
    //Find x and y coordinates of the element you want to click and try clicking that way
    //code is currently working. Need to refactor, create a loop of some kind
  } catch (e) {
    console.log(e);
  }
})();
