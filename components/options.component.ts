import { Element } from "@wdio/sync";

class Options {
  get optionsBtn(): Element {
    return $("#prefsButton");
  }
  get optionsWindow(): Element {
    return $("#menu");
  }
  get closeOptionsBtn(): Element {
    return $(".menuClose");
  }
  get fancyGraphicsBtn(): Element {
    return this.optionsWindow.$("#fancyButton");
  }
  get particlesBtn(): Element {
    return this.optionsWindow.$("#particlesButton");
  }
  get milkBtn(): Element {
    return this.optionsWindow.$("#milkButton");
  }
  get cursorsBtn(): Element {
    return this.optionsWindow.$("#cursorsButton");
  }
  get clickAnimationBtn(): Element {
    return this.optionsWindow.$("#wobblyButton");
  }
  get shortNumbersBtn(): Element {
    return this.optionsWindow.$("#formatButton");
  }
  get fastNotificationsBtn(): Element {
    return this.optionsWindow.$("#notifsButton");
  }

  openOptions(): void {
    this.optionsBtn.waitForDisplayed();
    this.optionsBtn.click();
  }
  closeOptions(): void {
    this.closeOptionsBtn.scrollIntoView(false);
    this.closeOptionsBtn.click();
  }

  clickBtn(btn: Element): void {
    btn.waitForDisplayed();
    btn.scrollIntoView(false);
    btn.click();
  }

  disableFancyGraphics(): void {
    this.clickBtn(this.fancyGraphicsBtn);
  }
  disableParticles(): void {
    this.clickBtn(this.particlesBtn);
  }
  disableMilk(): void {
    this.clickBtn(this.milkBtn);
  }
  disableCursors(): void {
    this.clickBtn(this.cursorsBtn);
  }
  disableClickAnimation(): void {
    this.clickBtn(this.clickAnimationBtn);
  }
  disableShortNumbers(): void {
    this.clickBtn(this.shortNumbersBtn);
  }
  enableFastNotifications(): void {
    this.clickBtn(this.fastNotificationsBtn);
  }

  setHighPerformance(): void {
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
