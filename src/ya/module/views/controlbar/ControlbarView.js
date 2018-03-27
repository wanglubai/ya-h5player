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
import PlayButton from "./play/PlayButton";
import ScreenButton from "./screen/ScreenButton";

class ControlbarView extends Sprite {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-controlbar-view"></div>');
    this._btnList = {};
    LayerManager.BarLayer.append(this);
  }
  _dealVo_(vo) {
    if (vo.type == "init") {
      var vos = vo.list;
      for (var i = 0; i < vos.length; i++) {
        var btnVo = vos[i];
        var btn;
        if (btnVo.id == "play") {
          btn = new PlayButton(this);
          btn.setVo({ type: "init", value: 0 });
        } else if (btnVo.id == "screen") {
          btn = new ScreenButton(this);
          btn.setVo({ type: "init", value: 0 });
        }
      }
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
