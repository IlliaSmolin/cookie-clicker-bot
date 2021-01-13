import { animationTime } from "../config/timeouts.json";
import numbersHelper from "../helpers/numbers.helper";
import { Element } from "@wdio/sync"

class Products {
  get productsBlock(): Element {
    return $("#products");
  }
  get cursor(): Element {
    return this.product(0);
  }
  get cursorPrice(): number {
    return this.productPrice(0);
  }
  get cursorAmount(): number {
    return this.productOwnedAmount(0);
  }
  get grandMa(): Element {
    return this.product(1);
  }
  get grandMaPrice(): number {
    return this.productPrice(1);
  }
  get grandMaAmount(): number {
    return this.productOwnedAmount(1);
  }
  get farm(): Element {
    return this.product(2);
  }
  get farmPrice(): number {
    return this.productPrice(2);
  }
  get farmAmount(): number {
    return this.productOwnedAmount(2);
  }

  product(index: number): Element {
    return this.productsBlock.$(`#product${index}`);
  }
  productPrice(index: number): number {
    let amount = this.productsBlock.$(`#productPrice${index}`).getHTML(false);
    amount = numbersHelper.clearCommas(amount);
    return +amount;
  }
  productOwnedAmount(index: number): number {
    let amount = this.productsBlock.$(`#productOwned${index}`).getHTML(false);
    amount = numbersHelper.clearCommas(amount);
    return +amount;
  }
  buyProduct(product: Element): void {
    product.scrollIntoView();
    product.click();
    browser.pause(animationTime);
  }
  buyCursor(): void {
    this.buyProduct(this.cursor);
  }
  buyGrandMa(): void {
    this.buyProduct(this.grandMa);
  }
  buyFarm(): void {
    this.buyProduct(this.farm);
  }
}

export default new Products();
