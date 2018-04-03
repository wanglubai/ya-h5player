import BaseController from "./BaseController";
import ControlbarView from "../views/controlbar/ControlbarView";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import ConfigModel from "../models/ConfigModel";
import MusicTips from "../views/controlbar/music/MusicTips";
import SharpnessButton from "../views/controlbar/sharpness/SharpnessButton";
import LayerManager from "../managers/LayerManager";
import ModelEvent from "../models/ModelEvent";

class BarController extends BaseController {
  constructor() {
    super();
    this._model = ConfigModel;
  }
  init() {
    this._addEvent_();
  }
  _addEvent_() {
    Dispatcher.ons(EventType.InnerInit, EventType.MouseMove, this.eventFun.bind(this));
    this._model.ons(ModelEvent.SharpnessVosByModel, this.eventFun.bind(this));
  }
  eventFun(e) {
    switch (e.type) {
      case EventType.InnerInit:
        this._initControlbarView();
        break;
      case ModelEvent.SharpnessVosByModel:
        this._updateSharpnessVos(e.value);
        break;
      case EventType.MouseMove:
        this._showControlbarView();
        break;
      default:
        Debug.log("BarController No match " + e.type);
        break;
    }
  }
  _updateSharpnessVos(vo) {
    if (this._controlbarView) {
      this._controlbarView.setVo({ 'type': 'sharpnessVos', value: vo });
    }
  }
  _showControlbarView() {
    if (this._controlbarView) {
      this._controlbarView.moveShow();
    }
  }
  _initControlbarView() {
    if (this._controlbarView == null) {
      this._controlbarView = new ControlbarView();
      this._controlbarView.setVo({
        type: "init",
        list: this._model.controlbarBtnConfig
      });
    }
  }
}
export default new BarController();
