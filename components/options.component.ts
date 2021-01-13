import { Element } from "@wdio/sync";

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
  get fancyGraphicsBtn() {
    return this.optionsWindow.$("#fancyButton");
  }
  get particlesBtn() {
    return this.optionsWindow.$("#particlesButton");
  }
  get milkBtn() {
    return this.optionsWindow.$("#milkButton");
  }
  get cursorsBtn() {
    return this.optionsWindow.$("#cursorsButton");
  }
  get clickAnimationBtn() {
    return this.optionsWindow.$("#wobblyButton");
  }
  get shortNumbersBtn() {
    return this.optionsWindow.$("#formatButton");
  }
  get fastNotificationsBtn() {
    return this.optionsWindow.$("#notifsButton");
  }

  openOptions() {
    this.optionsBtn.waitForDisplayed();
    this.optionsBtn.click();
  }
  closeOptions() {
    this.closeOptionsBtn.scrollIntoView(false);
    this.closeOptionsBtn.click();
  }

  clickBtn(btn: Element) {
    btn.waitForDisplayed();
    btn.scrollIntoView(false);
    btn.click();
  }

  disableFancyGraphics() {
    this.clickBtn(this.fancyGraphicsBtn);
  }
  disableParticles() {
    this.clickBtn(this.particlesBtn);
  }
  disableMilk() {
    this.clickBtn(this.milkBtn);
  }
  disableCursors() {
    this.clickBtn(this.cursorsBtn);
  }
  disableClickAnimation() {
    this.clickBtn(this.clickAnimationBtn);
  }
  disableShortNumbers() {
    this.clickBtn(this.shortNumbersBtn);
  }
  enableFastNotifications() {
    this.clickBtn(this.fastNotificationsBtn);
  }

  setHighPerformance() {
    this.openOptions();
    this.disableFancyGraphics();
    this.disableParticles();
    this.disableMilk();
    this.disableCursors();
    this.disableClickAnimation();
    this.disableShortNumbers();
    this.enableFastNotifications();
    this.closeOptions();
  }
}

export default new Options();
