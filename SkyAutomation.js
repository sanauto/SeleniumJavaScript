require("chromedriver");
const {Builder, Browser, By, Key, until, WebDriver} = require('selenium-webdriver');
const { get } = require('selenium-webdriver/http');

(async function example() {
    let driver = await new Builder()
    .forBrowser("chrome")
    .build();
    
  try {
    await driver.get('https://www.sky.com/');   
    driver.manage().window().maximize(); 
    
    const iframe = driver.findElement(By.css('#sp_message_container_474555 > iframe'));
    await driver.switchTo().frame(iframe)
    
    let el = await driver.findElement(By.css('button[title="Agree"]'));
    await driver.wait(until.elementIsVisible(el), 3000)
    await el.click();

    await driver.switchTo().defaultContent();
    console.log("Switched to default content")
    
    driver.wait(until.titleIs('Sky Glass - The New 4k TV From Sky | Sky Broadband, TV & Mobile | Sky.com'), 1000);
    console.log("Verified the title")
    
    var millisecondsToWait = 5000;
    setTimeout(function() {
    }, millisecondsToWait);

    try
    {
      await driver.findElement(By.xpath('//a[@data-test-id="nav-item-link"][contains(text(), "Deals")]')).click();
      const iframe1 = await driver.findElement(By.css('#sp_message_container_474555 > iframe'));
      await driver.wait(until.elementIsVisible(iframe1), 5000)
      await driver.switchTo().frame(iframe1)

      let el1 = await driver.findElement(By.css('button[title="Agree"]'));
      await driver.wait(until.elementIsVisible(el1), 5000)
      await el1.click();
    }
    catch(err)
    {

    }
    finally
    {
      await driver.switchTo().defaultContent();
    }
    console.log("Switched to default content")

    console.log("URL is " + await driver.getCurrentUrl());

    try{

      let mobileDeal = await driver.findElement(By.xpath('//div[@id="deals-filter"]'))
      .findElement(By.xpath('//button[contains(@class, "Button-sc") and text()="Mobile"]'));
      await driver.wait(until.elementIsVisible(mobileDeal), 5000)
      await mobileDeal.click();
      
      var allMobileDeals = await driver.findElement(By.css('#deals > div'))
  .findElements(By.xpath('//*[contains(@id,"deal-")]'));

      console.log(allMobileDeals.length)

      var iPhoneMobileDeal = await driver.findElement(By.xpath('//*[contains(@id,"deal-iphone-12-64gb")]'))
      .findElement(By.xpath('//*[contains(@id,"price.offer")]'));
      console.log(await iPhoneMobileDeal.getText())

      var samsungDeal = driver.findElement(By.css('#deal-samsung-galaxy-s22'));
      console.log("this is samsung " + await samsungDeal.getText())

      var simOnlyDeal = await driver.findElement(By.xpath('//*[contains(@id,"deal-sim-only-plan")]'))
      console.log(await simOnlyDeal.getText())
    }
    catch(err)
    {
        console.log("Mobile is not found " + err)
    }

    try
    {
      await driver.get('https://www.sky.com/'); 
    } 
    catch(err)
    {
      console.log("this is error in 61 " + err)
    }

    var millisecondsToWait = 3000;
    setTimeout(function() {
    }, millisecondsToWait);
       
    let search = await driver.findElement(By.css('[data-test-id=masthead-search-toggle-button]'));
    await driver.wait(until.elementIsVisible(search), 5000)
    await search.click();

    let searchText = await driver.findElement(By.css('[type=search]'));
    await driver.wait(until.elementIsVisible(searchText), 5000)
    await searchText.sendKeys("sky");

    try
    {
    let editorialSection = await driver.findElement(By.css('[data-test-id=editorial-section]'));
    await driver.wait(until.elementIsVisible(editorialSection), 5000)
    console.log(await editorialSection.isDisplayed)    
    }catch(err) {}
    try
    {
      let ell1 = await driver.findElement(By.css('[data-test-id=sign-in-link]'));
      await driver.wait(until.elementIsVisible(ell1), 5000)
      await ell1.click();} 
    catch(err)
    {
    }

    var millisecondsToWait = 3000;
    setTimeout(function() {
    }, millisecondsToWait);

    try
    {
      const iframe22 = await driver.findElement(By.css('#sp_message_container_474555 > iframe'));
      await driver.wait(until.elementIsVisible(iframe22), 5000)
      await driver.switchTo().frame(iframe22)

      let el11 = await driver.findElement(By.css('button[title="Agree"]'));
      await driver.wait(until.elementIsVisible(el11), 5000)
      await el11.click();
    }
    catch(err)
    {
    }
    finally{
      const iframe2 = await driver.findElement(By.css('#sign-in-iframe > div > iframe'));
      await driver.wait(until.elementIsVisible(iframe2), 5000)
      await driver.switchTo().frame(iframe2)

      let el2 = await driver.findElement(By.css('[data-testid=AUTHN__INPUT]'));
      await driver.wait(until.elementIsVisible(el2), 5000)
      await el2.sendKeys('seleniumjs@test.com');

      let el3 = await driver.findElement(By.css('[data-tracking-label=identifier--submit-button]'));
      await driver.wait(until.elementIsVisible(el3), 5000)
      await el3.click();

      var errMessage = false;
      try{
        let el4 = await driver.findElement(By.xpath('//h1[@data-testid="CREATE_PASSWORD__TITLE"][contains(text(), "Create your My Sky password")]'));
        await driver.wait(until.elementIsVisible(el4), 5000)
        await el3.click();
        console.log(await el3.isDisplayed)}
      catch(err)
      {
        errMessage = true;
      }

      if (errMessage)
      {
        console.log("cannot find error")
        try{
      //   const iframe3 = await driver.findElement(By.css('#sign-in-iframe > div > iframe'));
      //   await driver.wait(until.elementIsVisible(iframe3), 5000)
      //  // await driver.switchTo().frame(iframe3)
      //   console.log(iframe3.getAttribute('title'))
        
  
        let errorContainer = await driver.findElement(By.css('[data-testid=ERROR__CONTAINER]'));
        await driver.wait(until.elementIsVisible(errorContainer), 5000)
        console.log(await errorContainer.isDisplayed)

        }catch(err) {console.log("still an error" + err)}
      }

    }
  } 
  catch(err)
  {
    console.log("Last error " + err);
  }
  finally {
    //await driver.manage().deleteAllCookies;
    //await driver.quit();
  }
})();