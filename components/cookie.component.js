class Cookie {
  get cookie() {
    return $("#bigCookie");
  }
  get cookiesAmountBlock() {
    return $('#cookies');
  }
  get cookiesAmount() {
    const amount = this.cookiesAmountBlock.getHTML(false).split(" ")[0];
    return +amount;
  }
  get cookiesPerSecond() {
    const textArr = this.cookiesAmountBlock.$("div").getHTML(false).split(" ");
    const amount = textArr[textArr.length - 1];
    return +amount;
  }

  clickCookie(times, clickTimeout = 10) {
    this.cookie.scrollIntoView(false);
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price, clickTimeout = 10) {
    const difference = price - this.cookiesAmount;
    this.clickCookie(difference, clickTimeout);
  }
}

module.exports = new Cookie();
