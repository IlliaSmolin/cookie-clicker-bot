const products = require("./products.component").default;
const upgrades = require("./upgrades.component");
const { clickTimeout } = require("../config/timeouts.json");
const { clearCommas } = require("../helpers/numbers.helper").default;

class Cookie {
  get cookie() {
    return $("#bigCookie");
  }
  get cookiesAmountBlock() {
    return $('#cookies');
  }
  get cookiesAmount() {
    let amount = this.cookiesAmountBlock.getHTML(false).split(" ")[0];
    amount = clearCommas(amount);
    return +amount;
  }
  get cookiesPerSecond() {
    const textArr = this.cookiesAmountBlock.getHTML(false).split(" ");
    const amount = clearCommas(textArr[textArr.length - 1].replace("</div>", ""));
    return +amount;
  }

  clickCookie(cookies, clickPower) {
    this.cookie.scrollIntoView(false);
    const clicksPerSec = 55;
    const cookiesPerSec = Math.floor(this.cookiesPerSecond);
    const times = Math.ceil((cookies / (cookiesPerSec + clickPower * clicksPerSec)) * clicksPerSec);
    
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
  clickToReachFarm(clickPower) {
    this.clickToReach(products.farmPrice, clickPower);
  }
  clickToReachUpgrade(clickPower, index = 1) {
    this.clickToReach(upgrades.getItemPrice(index), clickPower);
  }
}

module.exports = new Cookie();
