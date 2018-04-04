class Utils {
  static isTypeFunction(name) {
    if (name && typeof name == "function") {
      return true;
    } else {
      return false;
    }
  }
  static head() {
    var matches = /^https?:\/\/(test\d?|rc)\./.exec(document.location.href);
  }
  static getUrl(url){

  }
}
export default Utils;
