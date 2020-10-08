class CookiesBanner {
  get acceptCookiesBtn() {
    return $(".cc_btn_accept_all");
  }

  acceptCookies() {
    this.acceptCookiesBtn.waitForDisplayed();
    browser.pause(1000); //animation time
    this.acceptCookiesBtn.click();
  }
}

module.exports = new CookiesBanner();
