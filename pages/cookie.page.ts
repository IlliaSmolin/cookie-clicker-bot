import cookie from "../components/cookie.component";

class CookiesPage {
  url: string;

  constructor() {
    this.url = "/cookieclicker";
  }

  openUrl(): void {
    browser.url(this.url);
    cookie.cookie.waitForDisplayed();
  }
}

export default new CookiesPage();
