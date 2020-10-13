const cookiePage = require("../pages/cookie.page");
const cookie = require("../components/cookie.component");
const products = require("../components/products.component");
const options = require("../components/options.component");
const upgrades = require("../components/upgrades.component");
const cookiesBanner = require("../helpers/cookiesBanner.helper");
const { assert } = require("chai");

let amounts = {
  cursor: 0,
  grandMa: 0,
},
  mousePower = 1;

function reachAndBuyCursor() {
  cookie.clickToReachCursor(mousePower);
  products.buyCursor();
  amounts.cursor++;
}
function reachAndBuyGrandMa() {
  cookie.clickToReachGrandMa(mousePower);
  products.buyGrandMa();
  amounts.grandMa++;
}
function reachAndBuyUpgrade(cursor = false) {
  const initialUpgradesAmount = upgrades.upgradesAmount;
  cookie.clickToReachUpgrade(mousePower);
  upgrades.buyUpgrade();
  if (cursor) {
    mousePower *= 2;
  }
  return {
    initItems: initialUpgradesAmount,
    newItems: upgrades.upgradesAmount,
  }
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
    reachAndBuyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy second grandma", function () {
    reachAndBuyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy 5 cursors", function () {
    for (let i = 0; i < 5; i++) {
      reachAndBuyCursor();
    }
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy cursor upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade(true);
    assert.equal(newItems, initItems - 1);
  });
  it("Buy third grandma", function () {
    reachAndBuyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy fourth grandma", function () {
    reachAndBuyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy fifth grandma", function () {
    reachAndBuyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
});
