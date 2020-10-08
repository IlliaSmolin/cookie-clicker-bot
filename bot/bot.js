const cookiePage = require("../pages/cookie.page");
const cookie = require("../components/cookie.component");
const products = require("../components/products.component");
const options = require("../components/options.component");
const cookiesBanner = require("../helpers/cookiesBanner.helper");
const { assert } = require("chai");

const timeouts = {
  click: 30,
};

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
  });
  it("Accept cookies policy", function () {
    cookiesBanner.acceptCookies();
    assert.strictEqual(cookiesBanner.acceptCookiesBtn.isDisplayed(), false);
  });
  it("Disable short numbers option", function () {
    options.disableShortNumbers();
  });
  it("Buy first grandma", function () {
    cookie.clickToReach(products.grandMaPrice, timeouts.click);
    products.buyGrandMa();
    assert.strictEqual(products.grandMaAmount, 1);
  });
});
