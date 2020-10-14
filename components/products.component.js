const { animationTime } = require("../config/timeouts.json");
const { clearCommas } = require("../helpers/numbers.helper");

class Products {
  get productsBlock() {
    return $("#products");
  }
  get cursor() {
    return this.product(0);
  }
  get cursorPrice() {
    return this.productPrice(0);
  }
  get cursorAmount() {
    return this.productOwnedAmount(0);
  }
  get grandMa() {
    return this.product(1);
  }
  get grandMaPrice() {
    return this.productPrice(1);
  }
  get grandMaAmount() {
    return this.productOwnedAmount(1);
  }
  get farm() {
    return this.product(2);
  }
  get farmPrice() {
    return this.productPrice(2);
  }
  get farmAmount() {
    return this.productOwnedAmount(2);
  }

  product(index) {
    return this.productsBlock.$(`#product${index}`);
  }
  productPrice(index) {
    let amount = this.productsBlock.$(`#productPrice${index}`).getHTML(false);
    amount = clearCommas(amount);
    return +amount;
  }
  productOwnedAmount(index) {
    let amount = this.productsBlock.$(`#productOwned${index}`).getHTML(false);
    amount = clearCommas(amount);
    return +amount;
  }
  buyProduct(product) {
    product.scrollIntoView();
    product.click();
    browser.pause(animationTime);
  }
  buyCursor() {
    this.buyProduct(this.cursor);
  }
  buyGrandMa() {
    this.buyProduct(this.grandMa);
  }
  buyFarm() {
    this.buyProduct(this.farm);
  }
}

module.exports = new Products();
