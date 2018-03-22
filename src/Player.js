import "./res/player.css";

import Sprite from "./ya/component/Sprite.js";
import Dispatcher from "./ya/component/Dispatcher";
import EventType from "./ya/component/EventType";
import SingleController from "./ya/module/controllers/SingleController";
import LayerManager from "./ya/module/managers/LayerManager";

class Player extends Sprite {
  constructor(vo) {
    super();
    this._vo = vo;
    this.initDivDisplay("player");
    this.appendToById(this._vo["container"]);
    this.init();
  }
  init() {
    LayerManager.init(this);
    SingleController.init();
    Dispatcher.dispatchEvent(EventType.InnerInit);
  }
  play() {
    Dispatcher.dispatchEvent(EventType.VideoPlay);
  }
  pause() {
    Dispatcher.dispatchEvent(EventType.VideoPause);
  }
}
window["Player"] = Player;
