class NumbersHelper {
  clearCommas(str: string) {
    return str.replace(/,/g, "");
  }
}

module.exports = new NumbersHelper();
