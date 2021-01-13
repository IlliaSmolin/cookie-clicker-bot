class NumbersHelper {
  clearCommas(str: string) {
    return str.replace(/,/g, "");
  }
}

export default new NumbersHelper();
