const cookiePage = require("../pages/cookie.page");
const cookiesBanner = require("../helpers/cookiesBanner.helper");
const { assert } = require("chai");

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
    cookiesBanner.acceptCookies();
  });
  it("Buy first grandma", function () {
    cookiePage.clickToReach(cookiePage.grandMaPrice);
    cookiePage.buyGrandMa();
    assert.strictEqual(cookiePage.grandMaAmount, 1);
  });
});
