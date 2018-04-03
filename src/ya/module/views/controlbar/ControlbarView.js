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
import ConfigModel from "../../models/ConfigModel";

class ControlbarView extends Sprite {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-controlbar-view"></div>');
    this._playBtn = null;
    this._screenBtn = null;
    this._refreshBtn = null;
    this._rotateBtn = null;
    this._danmakuBtn = null;
    this._sharpnessBtn = null;
    this._musicBtn = null;
    this._setBtn = null;
    this._model = ConfigModel;

    this._coundDown = null;
    this._show = true;
    LayerManager.BarLayer.append(this);
  }
  moveShow() {
    this.removeClass("ya-controlbar-view-hidedown");
    this.addClass("ya-controlbar-view-showtop");
    this._resetConutDown();
  }
  _dealVo_(vo) {
    if (vo.type == "init") {
      var vos = vo.list;
      for (var i = 0; i < vos.length; i++) {
        var btnVo = vos[i];
        var btn;
        if (btnVo.id == "play") {
          this._playBtn = new PlayButton(this);
          this._playBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "screen") {
          this._screenBtn = new ScreenButton(this);
          this._screenBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "rotate") {
          this._rotateBtn = new RotateButton(this);
          this._rotateBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "refresh") {
          this._refreshBtn = new RefreshButton(this);
          this._refreshBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "danmaku") {
          this._danmakuBtn = new DanmakuButton(this);
          this._danmakuBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "music") {
          this._musicBtn = new MusicButton(this);
          this._musicBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "set") {
          this._setBtn = new SetButton(this);
          this._setBtn.setVo({ type: "init", value: btnVo });
        } else if (btnVo.id == "sharpness") {
          this._sharpnessBtn = new SharpnessButton(this);
          this._sharpnessBtn.setVo({ type: "init", value: btnVo });
        }
      }
      this._init();
    } else if (vo.type == "sharpnessVos") {
      if (this._sharpnessBtn) {
        this._sharpnessBtn.setVo({ type: "sharpnessVos", value: vo.value });
      }
    }
  }
  _init() {
    this._addEvent_();
    this._resetConutDown();
  }
  _resetConutDown() {
    if (this._coundDown) {
      clearTimeout(this._coundDown);
      this._coundDown = null;
    }
    this._coundDown = setTimeout(() => {
      this.addClass("ya-controlbar-view-hidedown");
      this.removeClass("ya-controlbar-view-showtop");
    }, 5000);
  }

  _addEvent_() {
    if (this._playBtn) {
      this._playBtn.ons(
        PlayButton.Play,
        PlayButton.Pause,
        this._eventFun.bind(this)
      );
    }
    if (this._screenBtn) {
      this._screenBtn.ons(
        ScreenButton.Normal,
        ScreenButton.Full,
        this._eventFun.bind(this)
      );
    }
    if (this._refreshBtn) {
      this._refreshBtn.ons(RefreshButton.Change, this._eventFun.bind(this));
    }
    if (this._rotateBtn) {
      this._rotateBtn.ons(RotateButton.Change, this._eventFun.bind(this));
    }
    if (this._danmakuBtn) {
      this._danmakuBtn.ons(
        DanmakuButton.Open,
        DanmakuButton.Close,
        this._eventFun.bind(this)
      );
    }
    if (this._musicBtn) {
      this._musicBtn.ons(MusicButton.Change, this._eventFun.bind(this));
    }
    if (this._setBtn) {
      this._setBtn.ons(SetButton.Change, this._eventFun.bind(this));
    }
    if (this._sharpnessBtn) {
      this._sharpnessBtn.ons(SharpnessButton.Change, this._eventFun.bind(this));
    }
  }
  _eventFun(e) {
    switch (e.type) {
      case PlayButton.Play:
        this._model.setPlayByUi();
        break;
      case PlayButton.Pause:
        this._model.setPauseByUi();
        break;
      case ScreenButton.Normal:
        this._model.setNormalScreenByUi();
        break;
      case ScreenButton.Full:
        this._model.setFullScreenByUi();
        break;
      case RefreshButton.Change:
        break;
      case DanmakuButton.Open:
        this._model.setOpenDanmakuByUi();
        break;
      case DanmakuButton.Close:
        this._model.setCloseDanmakuByUi();
        break;
      case MusicButton.Change:
        this._model.setVolumeByUi(e.value);
        break;
      case SetButton.Change:
        if (e.action == "alpha") {
          this._model.setDanmakuAlphaByUi(e.value);
        } else if (e.action == "type") {
          this._model.setDanmakuTypeByUi(e.value);
        } else if (e.action == "density") {
          this._model.setDanmakuDensityByUi(e.value);
        } else if (e.action == "animation") {
          this._model.setAnimationVisibleByUi(e.value);
        } else if (e.action == "car") {
          this._model.setAnimationCarByUi(e.value);
        }else if (e.action == "location") {
          this._model.setDanmakuLoactionByUi(e.value);
        }
        break;
      case SharpnessButton.Change:
        this._model.setSharpnessByUi(e.value);
        break;
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
