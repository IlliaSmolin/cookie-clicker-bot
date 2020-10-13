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

  clickCookie(cookies, clickPower) {
    this.cookie.scrollIntoView(false);
    const times = Math.ceil(cookies / clickPower);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price, clickPower) {
    const difference = Math.max(0, price - this.cookiesAmount);
    if (difference) {
      this.clickCookie(difference, clickPower);
    }
  }

  clickToReachCursor(clickPower) {
    this.clickToReach(products.cursorPrice, clickPower);
  }
  clickToReachGrandMa(clickPower) {
    this.clickToReach(products.grandMaPrice, clickPower);
  }
  clickToReachUpgrade(clickPower, index = 1) {
    this.clickToReach(upgrades.getItemPrice(index), clickPower);
  }
}

module.exports = new Cookie();
