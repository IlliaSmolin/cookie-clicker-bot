import { animationTime } from "../config/timeouts.json";
import numbersHelper from "../helpers/numbers.helper";
import { Element } from "@wdio/sync";

class Upgrades {
  get storeBlock(): Element {
    return $("#upgrades");
  }
  get itemPrice(): Element {
    return $("#tooltip .price");
  }
  get upgradesAmount(): number {
    return $$(".upgrade").length;
  }

  upgradeItem(index = 1): Element {
    return this.storeBlock.$(`#upgrade${index - 1}`);
  }
  getItemPrice(index: number = 1): number {
    this.upgradeItem(index).scrollIntoView(false);
    this.upgradeItem(index).moveTo();
    const amount = numbersHelper.clearCommas(this.itemPrice.getText());
    return +amount;
  }

  buyUpgrade(index: number = 1): void {
    this.upgradeItem(index).scrollIntoView();
    this.upgradeItem(index).click();
    browser.pause(animationTime);
  }
}

export default new Upgrades();
