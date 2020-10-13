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
  clickPower = 1;

function reachAndBuyCursor(amount = 1) {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachCursor(clickPower);
    products.buyCursor();
    amounts.cursor++;
  }
}
function reachAndBuyGrandMa(amount = 1) {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachGrandMa(clickPower);
    products.buyGrandMa();
    amounts.grandMa++;
  }
}
function reachAndBuyUpgrade(cursor = false) {
  const initialUpgradesAmount = upgrades.upgradesAmount;
  cookie.clickToReachUpgrade(clickPower);
  upgrades.buyUpgrade();
  if (cursor) {
    clickPower *= 2;
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
  it("Buy first cursor", function () {
    reachAndBuyCursor();
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy first cursor upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade(true);
    assert.equal(newItems, initItems - 1);
  });
  it("Buy second cursor upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade(true);
    assert.equal(newItems, initItems - 1);
  });
  it("Buy 10 grandmas", function () {
    reachAndBuyGrandMa(10);
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy 14 cursors", function () {
    reachAndBuyCursor(14);
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy first grandma upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade();
    assert.equal(newItems, initItems - 1);
  });
});
