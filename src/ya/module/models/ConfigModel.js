import BaseModel from "./BaseModel";
import ModelEvent from "./ModelEvent";

class ConfigModel extends BaseModel {
  constructor() {
    super();
    this.platform = "longzhu";
    this._giftVisible = null;
    this._musicVal = null;
    this._bulletAlpha = null;
    this._bulletType = null;
    this._bulletVisible = null;
    this._preNoLogin = null;
    this._controlbarBtnConfig = [];
  }

  init() {
    this.addEvent();
    this.initBarStorage();
    this.initControlbarBtn();
  }
  addEvent() {}
  initControlbarBtn() {
    var play = { id: "play", default: 0 };
    var music = { id: "music", default: this.musicVal };
    var bullet = { id: "bullet", default: 0 };
    var sharpness = { id: "sharpness", default: 0 };
    var animation = { id: "animation", default: 0 };
    var rotate = { id: "rotate", default: 0 };
    var screen = { id: "screen", default: 0 };
    var refresh = { id: "refresh", default: 0 };
    var danmaku = { id: "danmaku", default: this.bulletVisible };
    var set = { id: "set", default: 0 };
    this._controlbarBtnConfig.push(
      play,
      screen,
      music,
      bullet,
      sharpness,
      animation,
      rotate,
      refresh,
      danmaku,
      set
    );
  }

  setPlayByUi() {
    this.emit(ModelEvent.PlayByUi);
  }
  setPauseByUi() {
    this.emit(ModelEvent.PauseByUi);
  }
  setFullScreenByUi() {
    this.emit(ModelEvent.FullScreenByUi);
  }
  setNormalScreenByUi() {
    this.emit(ModelEvent.NormalScreenByUi);
  }
  setOpenDanmakuByUi() {
    this.bulletVisible = 0;
    this.emit(ModelEvent.OpenDanmakuByUi);
  }
  setCloseDanmakuByUi() {
    this.bulletVisible = 1;
    this.emit(ModelEvent.CloseDanmakuByUi);
  }

  initBarStorage() {
    if (this.localStorageHas("_giftVisible")) {
      this._giftVisible = this.getLocalStorage("_giftVisible");
    } else {
      this.giftVisible = 1;
    }
    if (this.localStorageHas("_musicVal")) {
      this._musicVal = this.getLocalStorage("_musicVal");
    } else {
      this.musicVal = 40;
    }
    if (this.localStorageHas("_bulletAlpha")) {
      this._bulletAlpha = this.getLocalStorage("_bulletAlpha");
    } else {
      this.bulletAlpha = 100;
    }
    if (this.localStorageHas("_bulletType")) {
      this._bulletType = this.getLocalStorage("_bulletType");
    } else {
      this.bulletType = 0;
    }
    if (this.localStorageHas("_bulletVisible")) {
      this._bulletVisible = this.getLocalStorage("_bulletVisible");
    } else {
      this.bulletVisible = 1;
    }
    if (this.localStorageHas("_preNoLogin")) {
      this._preNoLogin = this.getLocalStorage("_preNoLogin");
    } else {
      this.preNoLogin = 1;
    }
  }

  localStorageHas(key) {
    return window.localStorage.hasOwnProperty(key);
  }

  setLocalStorage(key, value) {
    window.localStorage[key] = value;
  }

  getLocalStorage(key) {
    return window.localStorage[key];
  }

  get controlbarBtnConfig() {
    return this._controlbarBtnConfig;
  }

  set giftVisible(val) {
    this.setLocalStorage("_giftVisible", arguments[0]);
    this._giftVisible = arguments[0];
  }
  get giftVisible() {
    return this._giftVisible;
  }

  set musicVal(val) {
    this.setLocalStorage("_musicVal", arguments[0]);
    this._musicVal = arguments[0];
  }
  get musicVal() {
    return this._musicVal;
  }

  set bulletAlpha(val) {
    this.setLocalStorage("_bulletAlpha", arguments[0]);
    this._bulletAlpha = arguments[0];
  }
  get bulletAlpha() {
    return this._bulletAlpha;
  }

  set bulletType(val) {
    this.setLocalStorage("_bulletType", arguments[0]);
    this._bulletType = arguments[0];
  }
  get bulletType() {
    return this._bulletType;
  }

  set bulletVisible(val) {
    this.setLocalStorage("_bulletVisible", arguments[0]);
    this._bulletVisible = arguments[0];
  }
  get bulletVisible() {
    return this._bulletVisible;
  }

  set preNoLogin(val) {
    this.setLocalStorage("_preNoLogin", arguments[0]);
    this._preNoLogin = arguments[0];
  }
  get preNoLogin() {
    return this._preNoLogin;
  }
}
export default new ConfigModel();
