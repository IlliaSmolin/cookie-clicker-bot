class Upgrades {
  get storeBlock() {
    return $("#upgrades");
  }
  get itemPrice() {
    return $("#tooltip .price");
  }

  upgradeItem(index) {
    return this.storeBlock.$(`#upgrade${index - 1}`);
  }
  getItemPrice(index) {
    this.upgradeItem(index).scrollIntoView(false);
    this.upgradeItem(index).moveTo();
    return this.itemPrice.getText();
  }
}

module.exports = new Upgrades();
