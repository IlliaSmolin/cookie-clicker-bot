class NumbersHelper {
  clearCommas(str: string): string {
    return str.replace(/,/g, "");
  }
}

export default new NumbersHelper();
