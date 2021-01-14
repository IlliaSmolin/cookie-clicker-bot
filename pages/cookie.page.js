const cookie = require("../components/cookie.component").default;

class CookiesPage {
  constructor() {
    this.url = "/cookieclicker";
  }

  openUrl() {
    browser.url(this.url);
    cookie.cookie.waitForDisplayed();
  }
}

module.exports = new CookiesPage();
