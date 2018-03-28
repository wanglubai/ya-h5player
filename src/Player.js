import "./res/player.css";

import Sprite from "./ya/component/Sprite.js";
import Dispatcher from "./ya/component/Dispatcher";
import EventType from "./ya/component/EventType";
import SingleController from "./ya/module/controllers/SingleController";
import LayerManager from "./ya/module/managers/LayerManager";
import ConfigModel from "./ya/module/models/ConfigModel";
import ModelEvent from "./ya/module/models/ModelEvent";

class Player extends Sprite {
  constructor(vo) {
    super();
    this._vo = vo;
    this._model = ConfigModel;
    this.initDivDisplay("player");
    this.appendToById(this._vo["container"]);
    this.init();
    this._addEvent_();
  }
  init() {
    LayerManager.init(this);
    SingleController.init();
    Dispatcher.emit(EventType.InnerInit);
  }
  _addEvent_() {
    this._model.ons(
      ModelEvent.FullScreenByUi,
      ModelEvent.NormalScreenByUi,
      this._evetFun.bind(this)
    );
  }
  _evetFun(e) {
    switch (e.type) {
      case ModelEvent.NormalScreenByUi:
        this._exitFullScreen();
        break;
      case ModelEvent.FullScreenByUi:
        this._fullScreen();
        break;
    }
  }

  play() {
    Dispatcher.emit(EventType.DataPlay);
  }
  pause() {
    Dispatcher.emit(EventType.DataPause);
  }
  fullScreen() {
    if (this._fullScreen()) {
      Dispatcher.emit(EventType.DataFullScreen);
    }
  }
  exitFullScreen() {
    if (this._exitFullScreen()) {
      Dispatcher.emit(EventType.DataExitFullScreen);
    }
  }
  //私有
  _fullScreen() {
    var elem = this.display[0];
    if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
      return true;
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
      return true;
    } else if (elem.requestFullScreen) {
      elem.requestFullscreen();
      return true;
    }
    return false;
  }
  _exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      return true;
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      return true;
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      return true;
    }
    return false;
  }
}
window["Player"] = Player;