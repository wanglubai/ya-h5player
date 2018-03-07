import Sprite from '../../component/Sprite.js';
import flvjs from '../../../libs/flv/flv.js';

class Video extends Sprite {
  constructor() {
    super();
    this._claseeName = 'Video';
    this._initDisplay('video', 'video');
    this._init();
  }
  _init() {
    if (flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'av.flv'
      });
      flvPlayer.attachMediaElement(this._display[0]);
      flvPlayer.load();
      flvPlayer.play();
    }
  }
}

export default Video;