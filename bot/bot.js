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

function reachAndBuyCursor(amount = 1) {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachCursor(mousePower);
    products.buyCursor();
    amounts.cursor++;
  }
}
function reachAndBuyGrandMa(amount = 1) {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachGrandMa(mousePower);
    products.buyGrandMa();
    amounts.grandMa++;
  }
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
  it("Buy first cursor", function () {
    reachAndBuyCursor();
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy cursor upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade(true);
    assert.equal(newItems, initItems - 1);
  });
  it("Buy 3 grandmas", function () {
    reachAndBuyGrandMa(3);
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy 4 cursors", function () {
    reachAndBuyCursor(4);
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy second cursor upgrade", function () {
    const { initItems, newItems } = reachAndBuyUpgrade(true);
    assert.equal(newItems, initItems - 1);
  });
  it("Buy 5 cursors", function () {
    reachAndBuyCursor(5);
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy 2 grandmas", function () {
    reachAndBuyGrandMa(2);
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
});
