import Sprite from "../../../component/Sprite";

import "./ControlbarView.css";
import LayerManager from "../../managers/LayerManager";
import Button from "../../../component/Button";
import ControlbarButton from "./ControlbarButton";
import EventType from "../../../component/EventType";
import ControlbarButtonEvent from "./ControlbarButtonEvent";
import Dispatcher from "../../../component/Dispatcher";

class ControlbarView extends Sprite {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-controlbar-view"></div>');
    this._btnList = {};
    LayerManager.BarLayer.append(this);
  }
  _dealVo_(vo) {
    if (vo.type == "init") {
      for (var i = 0; i < vo.list.length; i++) {
        var button = new ControlbarButton();
        button.setVo({ type: "init", init: vo.list[i] });
        this.append(button);
        this._btnList[vo.list[i].id] = button;
        button.on(ControlbarButtonEvent.ButtonClick, e => this.eventFun(e));
      }
    }
  }
  eventFun(e) {
    if (e.type == ControlbarButtonEvent.ButtonClick) {
      var _vo = e.vo;
      switch (_vo.id) {
        case "play":
          if (_vo.value == 0) {
            Dispatcher.emit(EventType.UiPlay);
          } else {
            Dispatcher.emit(EventType.UiPause);
          }
          break;
        case "screen":
          if (_vo.value == 1) {
            Dispatcher.emit(EventType.UiFullScreen);
          } else {
            Dispatcher.emit(EventType.UiExitFullScreen);
          }
          break;
      }
    }
  }
}
export default ControlbarView;
