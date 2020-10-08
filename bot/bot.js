const cookiePage = require("../pages/cookie.page");
const cookie = require("../components/cookie.component");
const products = require("../components/products.component");
const cookiesBanner = require("../helpers/cookiesBanner.helper");
const { assert } = require("chai");

const timeouts = {
  click: 30,
};

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
    cookiesBanner.acceptCookies();
  });
  it("Buy first grandma", function () {
    cookie.clickToReach(products.grandMaPrice, timeouts.click);
    products.buyGrandMa();
    assert.strictEqual(products.grandMaAmount, 1);
  });
});
