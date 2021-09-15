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

  async function urlTest(url1, xpath) {
    try {
      console.log({ url1 });
      console.log({ xpath });
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

      await driver.wait(
        until.elementLocated(
          By.xpath(
            "/html/body/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/button"
          )
        ),
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
        Test if each card navigates to correct page
   
   */
    //Don't change position of these
    const actualUrl = [
      "http://localhost:3000/redbrick",
      "http://localhost:3000/sweet-shop",
      "http://localhost:3000/decaf-espresso",
      "http://localhost:3000/sasaba",
      "http://localhost:3000/la-floresta",
      "http://localhost:3000/adela-reyes",
      "http://localhost:3000/filtered-bean",
      "http://localhost:3000/el-diamante",
      "http://localhost:3000/dis-palo",
      "http://localhost:3000/smart-dripper",
      "http://localhost:3000/bookkisa",
      "http://localhost:3000/el-dasto",
      "http://localhost:3000/peretu",
      "http://localhost:3000/lultrina",
    ];

    const xpath = [
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[1]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[2]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[3]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[4]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[5]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[6]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[7]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[8]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[9]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[10]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[11]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[12]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[13]/a/div/div",
      "/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div[14]/a/div/div",
    ];

    await urlTest(actualUrl[0], xpath[0]);
    await urlTest(actualUrl[1], xpath[1]);
    await urlTest(actualUrl[2], xpath[2]);
    await urlTest(actualUrl[3], xpath[3]);
    await urlTest(actualUrl[4], xpath[4]);
    await urlTest(actualUrl[5], xpath[5]);
    await urlTest(actualUrl[6], xpath[6]);
    await urlTest(actualUrl[7], xpath[7]);
    await urlTest(actualUrl[8], xpath[8]);
    await urlTest(actualUrl[9], xpath[9]);
    await urlTest(actualUrl[10], xpath[10]);
    await urlTest(actualUrl[11], xpath[11]);
    await urlTest(actualUrl[12], xpath[12]);

    //code is currently working. Need to refactor, create a loop of some kind
  } catch (e) {
    console.log(e);
  }
})();
