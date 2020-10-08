class CookiesBanner {
  get acceptCookiesBtn() {
    return $(".cc_btn_accept_all");
  }

  acceptCookies() {
    this.acceptCookiesBtn.waitForDisplayed();
    this.acceptCookiesBtn.click();
  }
}

module.exports = new CookiesBanner();
