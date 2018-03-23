import YaDanmaku from "../views/danmaku/YaDanmaku";
import BaseController from "./BaseController";
import EventType from "../../component/EventType";
import Dispatcher from "../../component/Dispatcher";

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
      this._danmakuView = new YaDanmaku();
    }
    setInterval(this.addVo.bind(),1000/24)
  }
  addVo(){

  }
}
export default new DanmakuController();
