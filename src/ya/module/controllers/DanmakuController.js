import BaseController from "./BaseController";
import EventType from "../../component/EventType";
import Dispatcher from "../../component/Dispatcher";
import DanmakuView from "../views/danmaku/DanmakuView";

class DanmakuController extends BaseController {
  constructor() {
    super();
    this._danmakuView = null;
  }
  _addEvent_() {
    Dispatcher.ons(EventType.InnerInit, this.eventFun.bind(this));
  }
  init() {
    this._addEvent_();
  }
  eventFun(e) {
    switch (e.type) {
      case EventType.InnerInit:
        this._initDanmakuView();
        break;
      default:
        Debug.log("DanmakuController No match " + e.type);
        break;
    }
  }
  _initDanmakuView() {
    if (this._danmakuView == null) {
      this._danmakuView = new DanmakuView();
      this._danmakuView.setVo({ 'type': 'init' })
    }
    // this._danmakuView.setVo({ 'type': 'add', 'value': { 'child': 'aasaaaaaaaaa' } })
    // this._danmakuView.setVo({ 'type': 'add', 'value': { 'child': 'aasaaaaaaaaa' } })
    setInterval(this.addVo.bind(this), 100 )
  }
  addVo() {
    this._danmakuView.setVo({ 'type': 'add', 'value': { 'child': 'aasaaaaaaaaa' } })
  }
}
export default new DanmakuController();
