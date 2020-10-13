const cookiePage = require("../pages/cookie.page");
const cookie = require("../components/cookie.component");
const products = require("../components/products.component");
const options = require("../components/options.component");
const cookiesBanner = require("../helpers/cookiesBanner.helper");
const { assert } = require("chai");

const productsAmount = {
  cursor: 0,
  grandMa: 0,
};

function buyCursor() {
  products.buyCursor();
  productsAmount.cursor++;
}
function buyGrandMa() {
  products.buyGrandMa();
  productsAmount.grandMa++;
}
function clickToReachCursor() {
  cookie.clickToReach(products.cursorPrice);
}
function clickToReachGrandMa() {
  cookie.clickToReach(products.grandMaPrice);
}

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
  });
  it("Accept cookies policy", function () {
    cookiesBanner.acceptCookies();
    assert.strictEqual(cookiesBanner.acceptCookiesBtn.isDisplayed(), false);
  });
  it("Configure the game", function () {
    options.setHighPerformance();
  });
  it("Buy first grandma", function () {
    clickToReachGrandMa();
    buyGrandMa();
    assert.strictEqual(products.grandMaAmount, productsAmount.grandMa);
  });
  it("Buy second grandma", function () {
    clickToReachGrandMa();
    buyGrandMa();
    assert.strictEqual(products.grandMaAmount, productsAmount.grandMa);
  });
  it("Buy 5 cursors", function () {
    for (let i = 0; i < 5; i++) {
      clickToReachCursor();
      buyCursor();
    }
    assert.strictEqual(products.cursorAmount, productsAmount.cursor);
  });
});
