const cookiePage = require("../pages/cookie.page");

describe("Cookie Clicker Bot", function () {
  before(function () {
    cookiePage.openUrl();
  })
  it("Start", function () {
    cookiePage.clickCookie();
  });
});
