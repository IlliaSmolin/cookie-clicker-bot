import { animationTime } from "../config/timeouts.json";

class CookiesBanner {
  get acceptCookiesBtn() {
    return $(".cc_btn_accept_all");
  }

  acceptCookies() {
    this.acceptCookiesBtn.waitForDisplayed();
    browser.pause(animationTime);
    this.acceptCookiesBtn.click();
  }
}

export default new CookiesBanner();
