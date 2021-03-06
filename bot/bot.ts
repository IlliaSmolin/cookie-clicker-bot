import cookiePage from "../pages/cookie.page";
import cookie from "../components/cookie.component";
import products from "../components/products.component";
import options from "../components/options.component";
import upgrades from "../components/upgrades.component";
import cookiesBanner from "../helpers/cookiesBanner.helper";
import { assert } from "chai";

let amounts = {
  cursor: 0,
  grandMa: 0,
  farm: 0,
},
  clickPower = 1;

function reachAndBuyCursor(amount: number = 1): void {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachCursor(clickPower);
    products.buyCursor();
    amounts.cursor++;
  }
}
function reachAndBuyGrandMa(amount: number = 1): void {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachGrandMa(clickPower);
    products.buyGrandMa();
    amounts.grandMa++;
  }
}
function reachAndBuyUpgrade(cursor: boolean = false): {initItems: number, newItems: number} {
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
function reachAndBuyFarm(amount: number = 1): void {
  for(let i = 0; i < amount; i++) {
    cookie.clickToReachFarm(clickPower);
    products.buyFarm();
    amounts.farm++;
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
  it("Buy first farm", function () {
    reachAndBuyFarm();
    assert.strictEqual(products.farmAmount, amounts.farm);
  });
});
