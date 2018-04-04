import BaseController from "./BaseController";
import EventType from "../../component/EventType";
import Dispatcher from "../../component/Dispatcher";
import DanmakuView from "../views/danmaku/DanmakuView";
import ConfigModel from "../models/ConfigModel";
import ModelEvent from "../models/ModelEvent";

class DanmakuController extends BaseController {
  constructor() {
    super();
    this._danmakuView = null;
    this._model = ConfigModel;
  }
  _addEvent_() {
    Dispatcher.ons(EventType.InnerInit, this._eventFun.bind(this));
    this._model.ons(ModelEvent.DanmakuAlphaByUi, ModelEvent.DanmakuTypeByUi, ModelEvent.DanmakuDensityByUi, this._eventFun.bind(this));
  }
  init() {
    this._addEvent_();
  }
  _eventFun(e) {
    switch (e.type) {
      case EventType.InnerInit:
        this._initDanmakuView();
        break;
      case ModelEvent.DanmakuAlphaByUi:
        this._setApha();
        break;
      case ModelEvent.DanmakuTypeByUi:
        this._setType();
        break;
      case ModelEvent.DanmakuDensityByUi:
        this._setDensity();
        break;
      default:
        Debug.log("DanmakuController No match " + e.type);
        break;
    }
  }
  _setApha() {
    this._danmakuView.setVo({ 'type': 'alpha', 'value': this._model.danmakuAlpha });
  }
  _setType() {
    this._danmakuView.setVo({ 'type': 'type', 'value': this._model.danmakuType });
  }
  _setDensity() {
    this._danmakuView.setVo({ 'type': 'density', 'value': this._model.danmakuDensity });
  }
  _initDanmakuView() {
    if (this._danmakuView == null) {
      this._danmakuView = new DanmakuView();
      var obj = {};
      obj['alpha'] = this._model.danmakuAlpha;
      obj['type'] = this._model.danmakuType;
      obj['density'] = this._model.danmakuDensity;
      obj['visible'] = this._model.danmakuVisible;
      this._danmakuView.setVo({ 'type': 'init', 'value': obj })
    }
    setInterval(this.addVo.bind(this), 100)
  }
  addVo() {
    this._danmakuView.setVo({ 'type': 'add', 'value': { 'child': 'aasaaaaaaaaa' } })
  }
}
export default new DanmakuController();
