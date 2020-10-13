const { animationTime } = require("../config/timeouts.json");
const { clearCommas } = require("../helpers/numbers.helper");

class Upgrades {
  get storeBlock() {
    return $("#upgrades");
  }
  get itemPrice() {
    return $("#tooltip .price");
  }
  get upgradesAmount() {
    return $$(".upgrade").length;
  }

  upgradeItem(index = 1) {
    return this.storeBlock.$(`#upgrade${index - 1}`);
  }
  getItemPrice(index = 1) {
    this.upgradeItem(index).scrollIntoView(false);
    this.upgradeItem(index).moveTo();
    const amount = clearCommas(this.itemPrice.getText());
    return +amount;
  }

  buyUpgrade(index = 1) {
    this.upgradeItem(index).scrollIntoView();
    this.upgradeItem(index).click();
    browser.pause(animationTime);
  }
}

module.exports = new Upgrades();
