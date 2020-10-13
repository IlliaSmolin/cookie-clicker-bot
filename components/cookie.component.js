const products = require("./products.component");
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

  clickCookie(times) {
    this.cookie.scrollIntoView(false);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price) {
    const difference = Math.max(0, price - this.cookiesAmount);
    if (difference) {
      this.clickCookie(difference, clickTimeout);
    }
  }

  clickToReachCursor() {
    this.clickToReach(products.cursorPrice);
  }
  clickToReachGrandMa() {
    this.clickToReach(products.grandMaPrice);
  }
}

module.exports = new Cookie();
