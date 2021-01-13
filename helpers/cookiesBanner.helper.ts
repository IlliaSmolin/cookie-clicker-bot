import { animationTime } from "../config/timeouts.json";
import { Element } from "@wdio/sync";

class CookiesBanner {
  get acceptCookiesBtn(): Element {
    return $(".cc_btn_accept_all");
  }

  acceptCookies(): void {
    this.acceptCookiesBtn.waitForDisplayed();
    browser.pause(animationTime);
    this.acceptCookiesBtn.click();
  }
}

export default new CookiesBanner();
