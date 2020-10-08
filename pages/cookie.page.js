const cookie = require("../components/cookie.component");

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
