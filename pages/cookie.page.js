const Products = require("./products.page");

class CookiesPage extends Products {
  constructor() {
    super();
    this.url = "/cookieclicker";
    this.clickTimeout = 30;
    this.textRefreshTime = 500;
  }

  openUrl() {
    browser.url(this.url);
    this.cookie.waitForDisplayed();
  }

  get cookie() {
    return $("#bigCookie");
  }
  get cookiesAmountBlock() {
    return $('#cookies');
  }
  get cookiesAmount() {
    browser.pause(this.textRefreshTime);
    const amount = this.cookiesAmountBlock.getHTML(false).split(" ")[0];
    return +amount;
  }
  get cookiesPerSecond() {
    browser.pause(this.textRefreshTime);
    const textArr = this.cookiesAmountBlock.$("div").getHTML(false).split(" ");
    const amount = textArr[textArr.length - 1];
    return +amount;
  }

  clickCookie(times, clickTimeout = this.clickTimeout) {
    this.cookie.scrollIntoView(false);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price, clickTimeout = this.clickTimeout) {
    const difference = price - this.cookiesAmount;
    this.clickCookie(difference, clickTimeout);
  }
}

module.exports = new CookiesPage();
