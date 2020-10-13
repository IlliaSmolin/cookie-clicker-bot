const products = require("./products.component");
const upgrades = require("./upgrades.component");
const { clickTimeout } = require("../config/timeouts.json");

class Cookie {
  get cookie() {
    return $("#bigCookie");
  }
  get cookiesAmountBlock() {
    return $('#cookies');
  }
  get cookiesAmount() {
    const amount = this.cookiesAmountBlock.getHTML(false).split(" ")[0];
    return +amount;
  }
  get cookiesPerSecond() {
    const textArr = this.cookiesAmountBlock.$("div").getHTML(false).split(" ");
    const amount = textArr[textArr.length - 1];
    return +amount;
  }

  clickCookie(cookies, mousePower) {
    this.cookie.scrollIntoView(false);
    const times = Math.ceil(cookies / mousePower);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price, mousePower) {
    const difference = Math.max(0, price - this.cookiesAmount);
    if (difference) {
      this.clickCookie(difference, mousePower);
    }
  }

  clickToReachCursor(mousePower) {
    this.clickToReach(products.cursorPrice, mousePower);
  }
  clickToReachGrandMa(mousePower) {
    this.clickToReach(products.grandMaPrice, mousePower);
  }
  clickToReachUpgrade(mousePower, index = 1) {
    this.clickToReach(upgrades.getItemPrice(index), mousePower);
  }
}

module.exports = new Cookie();
