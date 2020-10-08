class Options {
  get optionsBtn() {
    return $("#prefsButton");
  }
  get optionsWindow() {
    return $("#menu");
  }
  get closeOptionsBtn() {
    return $(".menuClose");
  }
  get shortNumbersBtn() {
    return this.optionsWindow.$("#formatButton");
  }

  disableShortNumbers() {
    this.optionsBtn.waitForDisplayed();
    this.optionsBtn.click();
    this.shortNumbersBtn.waitForDisplayed();
    this.shortNumbersBtn.scrollIntoView(false);
    this.shortNumbersBtn.click();
    this.closeOptionsBtn.scrollIntoView(false);
    this.closeOptionsBtn.click();
  }
}

module.exports = new Options();
