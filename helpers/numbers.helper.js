class NumbersHelper {
  clearCommas(num) {
    return num.replace(/,/g, "");
  }
}

module.exports = new NumbersHelper();
