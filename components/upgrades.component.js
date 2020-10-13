const { animationTime } = require("../config/timeouts.json");

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
    return this.itemPrice.getText();
  }

  buyUpgrade(index = 1) {
    this.upgradeItem(index).scrollIntoView();
    this.upgradeItem(index).click();
    browser.pause(animationTime);
  }
}

module.exports = new Upgrades();
