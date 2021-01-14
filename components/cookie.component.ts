import products from "./products.component";
import upgrades from "./upgrades.component";
import { clickTimeout } from "../config/timeouts.json";
import numbersHelper from "../helpers/numbers.helper";
import { Element } from "@wdio/sync";

class Cookie {
  get cookie(): Element {
    return $("#bigCookie");
  }
  get cookiesAmountBlock(): Element {
    return $('#cookies');
  }
  get cookiesAmount(): number {
    let amount = this.cookiesAmountBlock.getHTML(false).split(" ")[0];
    amount = numbersHelper.clearCommas(amount);
    return +amount;
  }
  get cookiesPerSecond(): number {
    const textArr = this.cookiesAmountBlock.getHTML(false).split(" ");
    const amount = numbersHelper.clearCommas(textArr[textArr.length - 1].replace("</div>", ""));
    return +amount;
  }

  clickCookie(cookies: number, clickPower: number): void {
    this.cookie.scrollIntoView(false);
    const clicksPerSec = 55;
    const cookiesPerSec = Math.floor(this.cookiesPerSecond);
    const times = Math.ceil((cookies / (cookiesPerSec + clickPower * clicksPerSec)) * clicksPerSec);
    
    for (let i = 0; i < times; i++) {
      this.cookie.click();
      browser.pause(clickTimeout);
    }
  }
  clickToReach(price: number, clickPower: number): void {
    const difference = Math.max(0, price - this.cookiesAmount);
    if (difference) {
      this.clickCookie(difference, clickPower);
    }
  }

  clickToReachCursor(clickPower: number): void {
    this.clickToReach(products.cursorPrice, clickPower);
  }
  clickToReachGrandMa(clickPower: number): void {
    this.clickToReach(products.grandMaPrice, clickPower);
  }
  clickToReachFarm(clickPower: number): void {
    this.clickToReach(products.farmPrice, clickPower);
  }
  clickToReachUpgrade(clickPower: number, index: number = 1): void {
    this.clickToReach(upgrades.getItemPrice(index), clickPower);
  }
}

export default new Cookie();
