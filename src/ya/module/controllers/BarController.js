import BaseController from "./BaseController";
import ControlbarView from "../views/controlbar/ControlbarView";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import ConfigModel from "../models/ConfigModel";
import MusicTips from "../views/controlbar/MusicTips";

class BarController extends BaseController {
  constructor() {
    super();
 
  }

  init() {
    this._addEvent_();
  }

  _addEvent_() {
    Dispatcher.ons(EventType.InnerInit, this.eventFun.bind(this));
  }

  eventFun(e) {
    switch (e.type) {
      case EventType.InnerInit:
        this._initControlbarView();
        break;
      default:
        Debug.log("BarController No match " + e.type);
        break;
    }
  }
  _initControlbarView() {
    if (this._controlbarView == null) {
      this._controlbarView = new ControlbarView();
    }
    this._controlbarView.setVo({
      type: "init",
      list: ConfigModel.controlbarBtnConfig
    });
    this._controlbarView.on("", this.controlbarViewEvent);

    new MusicTips();
  }
}
export default new BarController();
