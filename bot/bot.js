const cookiePage = require("../pages/cookie.page");
const { assert } = require("chai");

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
  });
  it("Buy first grandma", function () {
    cookiePage.clickToReach(cookiePage.grandMaPrice);
    cookiePage.buyGrandMa();
    assert.strictEqual(cookiePage.grandMaAmount, 1);
  });
});
