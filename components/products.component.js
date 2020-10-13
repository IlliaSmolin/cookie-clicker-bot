const { animationTime } = require("../config/timeouts.json");

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

  product(index) {
    return this.productsBlock.$(`#product${index}`);
  }
  productPrice(index) {
    const amount = this.productsBlock.$(`#productPrice${index}`).getHTML(false);
    return +amount;
  }
  productOwnedAmount(index) {
    const amount = this.productsBlock.$(`#productOwned${index}`).getHTML(false);
    return +amount;
  }
  buyCursor() {
    this.cursor.scrollIntoView();
    this.cursor.click();
    browser.pause(animationTime);
  }
  buyGrandMa() {
    this.grandMa.scrollIntoView();
    this.grandMa.click();
    browser.pause(animationTime);
  }
}

module.exports = new Products();
