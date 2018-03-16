import "./res/player.css";

import Sprite from "./ya/component/Sprite.js";
import LayerManager from "./ya/module/managers/LayerManager.js";
import Controller from "./ya/module/controllers/Controller";
import Dispatcher from "./ya/component/Dispatcher";
import EventType from "./ya/component/EventType";

class Player extends Sprite {
  constructor(vo) {
    super();
    this._vo = vo;
    this._initDisplay("player");
    this.appendToById(this._vo["container"]);
    this.init();
  }
  init() {
    LayerManager.init(this);
    Controller.init();
    Dispatcher.dispatchEvent(EventType.InnerInit);
  }
  // setVo(type,url){
  // }
}
window["Player"] = Player;
