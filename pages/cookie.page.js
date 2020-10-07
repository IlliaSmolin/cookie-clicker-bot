class CookiesPage {
  constructor() {
    this.url = "/cookieclicker";
  }

  get topMenu() {
    return $("#topBar");
  }
  get cookie() {
    return $("#bigCookie");
  }

  openUrl() {
    browser.url(this.url);
    this.cookie.waitForDisplayed();
  }

  clickCookie(times = 100, clickTimeout = 30) {
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
}

module.exports = new CookiesPage();
