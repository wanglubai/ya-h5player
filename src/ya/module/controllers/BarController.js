import BaseController from "./BaseController";
import ControlbarView from "../views/controlbar/ControlbarView";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";

class BarController extends BaseController {
  constructor() {
    super();
    Dispatcher.addEventListener(EventType.InnerInit, this.eventFun);
  }
  eventFun(e) {
    if (e.type == EventType.InnerInit) {
      this._controlbarView = new ControlbarView();
      this._controlbarView.setVo();
    }
  }
}
export default new BarController();
