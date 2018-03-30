import BaseModel from "./BaseModel";
import ModelEvent from "./ModelEvent";

class ConfigModel extends BaseModel {
  constructor() {
    super();
    this.platform = "longzhu";
    this._giftVisible = null;
    this._volume = null;
    this._danmakuAlpha = null;
    this._danmakuType = null;
    this._danmakuDensity = null;
    this._danmakuVisible = null;
    this._animationVisible = null;
    this._animationCar = null;
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
    var music = { id: "music", default: this.volume };
    var sharpness = { id: "sharpness", default: 0 };
    var animation = { id: "animation", default: 0 };
    var rotate = { id: "rotate", default: 0 };
    var screen = { id: "screen", default: 0 };
    var refresh = { id: "refresh", default: 0 };
    var danmaku = { id: "danmaku", default: this.danmakuVisible };
    var set = {
      id: "set",
      default: 0,
      alpha: this.danmakuAlpha,
      density: this.danmakuDensity,
      car: this.animationCar,
      animation: this.animationVisible
    };
    this._controlbarBtnConfig.push(
      play,
      screen,
      music,
      sharpness,
      animation,
      rotate,
      refresh,
      danmaku,
      set
    );
  }
  //view call
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
    this.danmakuVisible = 0;
    this.emit(ModelEvent.OpenDanmakuByUi);
  }
  setCloseDanmakuByUi() {
    this.danmakuVisible = 1;
    this.emit(ModelEvent.CloseDanmakuByUi);
  }
  setVolumeByUi(val) {
    this.volume = val;
    this.emit(ModelEvent.ChangeVolumeByUi);
  }
  setDanmakuAlphaByUi(val) {
    this.danmakuAlpha = val;
    this.emit(ModelEvent.DanmakuAlphaByUi);
  }
  setDanmakuTypeByUi(val) {
    this.danmakuType = val;
    this.emit(ModelEvent.DanmakuTypeByUi);
  }
  setDanmakuDensityByUi(val) {
    this.danmakuDensity = val;
    this.emit(ModelEvent.DanmakuDensityByUi);
  }
  setAnimationVisibleByUi(val) {
    this.animationVisible = val;
    this.emit(ModelEvent.AnimationVisibleByUi);
  }
  setAnimationCarByUi(val) {
    this.animationCar = val;
    this.emit(ModelEvent.AnimationCarByUi);
  }
  initBarStorage() {
    if (this.localStorageHas("_giftVisible")) {
      this._giftVisible = this.getLocalStorage("_giftVisible");
    } else {
      this.giftVisible = 1;
    }
    if (this.localStorageHas("_volume")) {
      this._volume = this.getLocalStorage("_volume");
    } else {
      this.volume = 40;
    }
    if (this.localStorageHas("_danmakuAlpha")) {
      this._danmakuAlpha = this.getLocalStorage("_danmakuAlpha");
    } else {
      this.danmakuAlpha = 2;
    }
    if (this.localStorageHas("_danmakuDensity")) {
      this._danmakuDensity = this.getLocalStorage("_danmakuDensity");
    } else {
      this.danmakuDensity = 2;
    }
    if (this.localStorageHas("_danmakuType")) {
      this._danmakuType = this.getLocalStorage("_danmakuType");
    } else {
      this.danmakuType = 0;
    }
    if (this.localStorageHas("_danmakuVisible")) {
      this._danmakuVisible = this.getLocalStorage("_danmakuVisible");
    } else {
      this.danmakuVisible = 1;
    }
    if (this.localStorageHas("_preNoLogin")) {
      this._preNoLogin = this.getLocalStorage("_preNoLogin");
    } else {
      this.preNoLogin = 1;
    }
    if (this.localStorageHas("_animationVisible")) {
      this._animationVisible = this.getLocalStorage("_animationVisible");
    } else {
      this.animationVisible = 1;
    }
    if (this.localStorageHas("_animationCar")) {
      this._animationCar = this.getLocalStorage("_animationCar");
    } else {
      this.animationCar = 1;
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

  set animationVisible(val) {
    this.setLocalStorage("_animationVisible", arguments[0]);
    this._animationVisible = arguments[0];
  }
  get animationVisible() {
    return this._animationVisible;
  }

  set animationCar(val) {
    this.setLocalStorage("_animationCar", arguments[0]);
    this._animationCar = arguments[0];
  }
  get animationCar() {
    return this._animationCar;
  }

  set giftVisible(val) {
    this.setLocalStorage("_giftVisible", arguments[0]);
    this._giftVisible = arguments[0];
  }
  get giftVisible() {
    return this._giftVisible;
  }

  set volume(val) {
    this.setLocalStorage("_volume", arguments[0]);
    this._volume = arguments[0];
  }
  get volume() {
    return this._volume;
  }

  set danmakuAlpha(val) {
    this.setLocalStorage("_danmakuAlpha", arguments[0]);
    this._danmakuAlpha = arguments[0];
  }
  get danmakuAlpha() {
    return this._danmakuAlpha;
  }

  set danmakuType(val) {
    this.setLocalStorage("_danmakuType", arguments[0]);
    this._danmakuType = arguments[0];
  }
  get danmakuType() {
    return this._danmakuType;
  }

  set danmakuDensity(val) {
    this.setLocalStorage("_danmakuDensity", arguments[0]);
    this._danmakuDensity = arguments[0];
  }
  get danmakuDensity() {
    return this._danmakuDensity;
  }

  set danmakuVisible(val) {
    this.setLocalStorage("_danmakuVisible", arguments[0]);
    this._danmakuVisible = arguments[0];
  }
  get danmakuVisible() {
    return this._danmakuVisible;
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
