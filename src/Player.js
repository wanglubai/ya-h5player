import Stage from './ya/module/view/Stage.js';
import Sprite from './ya/component/Sprite.js';
import Video from './ya/module/view/Video.js';
import './res/player.css';
class Player extends Sprite {
  constructor(vo) {
    super();
    this._vo = vo;
    this._parent = $('#' + this._vo['container']);
    this._display = $('<div class="ya-player"></div>');
    this._stage = null;
    this._video = null;
    this.init();
  }
  init() {
    this._stage = new Stage();
    this.appendDTo(this._parent);
    this.append(this._stage);

    this._video = new Video();
    this._stage.append(this._video);
  }
}
window['Player'] = Player;