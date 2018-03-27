import Sprite from "../../../component/Sprite";

import "./ControlbarView.css";
import LayerManager from "../../managers/LayerManager";
import Button from "../../../component/Button";
import ControlbarButton from "./ControlbarButton";
import EventType from "../../../component/EventType";
import Dispatcher from "../../../component/Dispatcher";
import DescribeTips from "../../../component/DescribeTips";
import MusicTips from "./music/MusicTips";
import SharpnessButton from "./sharpness/SharpnessButton";

class ControlbarView extends Sprite {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-controlbar-view"></div>');
    this._btnList = {};
    LayerManager.BarLayer.append(this);
  }
  _dealVo_(vo) {
    if (vo.type == "init") {
      // for (var i = 0; i < vo.list.length; i++) {
      //   var button = new ControlbarButton();
      //   if (vo.list[i].id == "music") {
      //     var tips=new MusicTips();
      //   } else {
      //     var tips = new DescribeTips();
      //     tips.setVo({ type: DescribeTips.Type_Describe, value: "aa" });
      //   }
      //   button.setTips(tips);
      //   this.append(tips);
      //   tips.init();
      //   button.setVo({ type: "init", init: vo.list[i] });
      //   this.append(button);
      //   this._btnList[vo.list[i].id] = button;
      //   button.on(ControlbarButton.ButtonClick, this.eventFun.bind(this));
      // }
      var i = new SharpnessButton();
      LayerManager.BarLayer.append(i);
      i.setVo({ type: "init", value: [1,2,3,3] });
    }
  }
  eventFun(e) {
    if (e.type == ControlbarButton.ButtonClick) {
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
