import BaseManager from "./BaseManager";
import Utils from "../../component/Utils";

class JsManager extends BaseManager {
  static changePlayer() {
    if (Utils.isTypeFunction("changePlayer")) {
      changePlayer("flash");
    }
  }
  static componentAction(c, m) {
    if (Utils.isTypeFunction("lg_componentAction")) {
      lg_componentAction(c, m);
    }
  }
  static danmakuDensity(type) {
    if (Utils.isTypeFunction("playerHugeDamu")) {
      playerHugeDamu(type);
    }
  }
  static getCarVisible() {
    if (Utils.isTypeFunction("getCarsStatusByFlash")) {
      return getCarsStatusByFlash();
    } else {
      return true;
    }
  }
  //true false
  static setCarVisible(bl) {
    if (Utils.isTypeFunction("video_cars_switch")) {
      video_cars_switch(bl);
    }
  }
  static openUrl(url) {
    if (Utils.isTypeFunction("open")) {
      open(url);
    }
  }
  static loginStatus() {}
}
export default JsManager;
