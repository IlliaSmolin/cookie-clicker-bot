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

function buyCursor() {
  products.buyCursor();
  amounts.cursor++;
}
function buyGrandMa() {
  products.buyGrandMa();
  amounts.grandMa++;
}
function buyUpgrade(cursor = false) {
  upgrades.buyUpgrade();
  if (cursor) {
    mousePower *= 2;
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
    cookie.clickToReachGrandMa(mousePower);
    buyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy second grandma", function () {
    cookie.clickToReachGrandMa(mousePower);
    buyGrandMa();
    assert.strictEqual(products.grandMaAmount, amounts.grandMa);
  });
  it("Buy 5 cursors", function () {
    for (let i = 0; i < 5; i++) {
      cookie.clickToReachCursor(mousePower);
      buyCursor();
    }
    assert.strictEqual(products.cursorAmount, amounts.cursor);
  });
  it("Buy cursor upgrade", function () {
    const initialUpgradesAmount = upgrades.upgradesAmount;
    cookie.clickToReachUpgrade(mousePower);
    buyUpgrade(true);
    assert.equal(upgrades.upgradesAmount, initialUpgradesAmount - 1);
  });
});
