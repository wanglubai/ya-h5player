import BaseController from "./BaseController";
import ControlbarView from "../views/controlbar/ControlbarView";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import ConfigModel from "../models/ConfigModel";

class BarController extends BaseController {
  constructor() {
    super();
    Dispatcher.on(EventType.InnerInit, this.eventFun);
  }
  
  eventFun(e) {
    if (e.type == EventType.InnerInit) {
      this._controlbarView = new ControlbarView();
      this._controlbarView.setVo({
        type: "init",
        list: ConfigModel.controlbarBtnConfig
      });
      this._controlbarView.on('',this.controlbarViewEvent)
    }
  }
  controlbarViewEvent(){

  }
}
export default new BarController();
