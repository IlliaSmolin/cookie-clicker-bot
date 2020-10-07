const cookiePage = require("../pages/cookie.page");

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
  });
  it("Buy first grandma", function () {
    cookiePage.clickToReach(cookiePage.grandMaPrice);
    cookiePage.buyGrandMa();
  });
});
