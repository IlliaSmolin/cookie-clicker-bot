class CookiesPage {
  constructor() {
    this.url = "/cookieclicker";
    this.clickTimeout = 30;
  }

  openUrl() {
    browser.url(this.url);
    this.cookie.waitForDisplayed();
  }

  //page + cookie block
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

  clickCookie(times, clickTimeout = this.clickTimeout) {
    this.cookie.scrollIntoView(false);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price) {
    let curr = this.cookiesAmount;
    while(curr < price) {
      this.clickCookie(1);
      curr = this.cookiesAmount;
    }
  }

  //products
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
  }
  buyGrandMa() {
    this.grandMa.scrollIntoView();
    this.grandMa.click();
  }
}

module.exports = new CookiesPage();
