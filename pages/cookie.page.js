class CookiesPage {
  constructor() {
    this.url = "/cookieclicker";
    this.clickTimeout = 30;
  }

  get topMenu() {
    return $("#topBar");
  }
  get cookie() {
    return $("#bigCookie");
  }
  get cookiesAmountBlock() {
    return $('#cookies');
  }
  get cookiesAmount() {
    const amount = this.cookiesAmountBlock.getText().split(" ")[0];
    return +amount;
  }
  get cookiesPerSecond() {
    const textArr = this.cookiesAmountBlock.$("div").getText().split(" ");
    const amount = textArr[textArr.length - 1];
    return +amount;
  }

  openUrl() {
    browser.url(this.url);
    this.cookie.waitForDisplayed();
  }

  clickCookie(times, clickTimeout = this.clickTimeout) {
    for (let i = 0; i <= times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
}

module.exports = new CookiesPage();
