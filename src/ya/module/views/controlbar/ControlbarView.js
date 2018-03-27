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
import RotateButton from "./rotate/RotateButton";
import RefreshButton from "./refresh/RefreshButton";
import DanmakuButton from "./danmaku/DanmakuButton";
import MusicButton from "./music/MusicButton";
import SetButton from "./set/SetButton";

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
        } else if (btnVo.id == "rotate") {
          btn = new RotateButton(this);
          btn.setVo({ type: "init", value: 0 });
        } else if (btnVo.id == "refresh") {
          btn = new RefreshButton(this);
          btn.setVo({ type: "init", value: 0 });
        } else if (btnVo.id == "danmaku") {
          btn = new DanmakuButton(this);
          btn.setVo({ type: "init", value: 0 });
        } else if (btnVo.id == "music") {
          btn = new MusicButton(this);
          btn.setVo({ type: "init", value: 0 });
        } else if (btnVo.id == "set") {
          btn = new SetButton(this);
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
