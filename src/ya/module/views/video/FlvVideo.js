import BaseVideo from "./BaseVideo";
import flvjs from "../../../../libs/flv/flv";
import LayerManager from "../../managers/LayerManager";

class FlvVideo extends BaseVideo {
  constructor() {
    super();
    this._initDisplay("video", "h5-video");
    LayerManager.VideoLayer.append(this);
    this._resReady = true;
  }
  _dealVo(vo) {
    if (vo['type'] == 'url') {
      this.playUrl(vo.value);
    }
  }
  playUrl(url) {
    if (this.flvPlayer == null) {
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: url
      });
      this.flvPlayer.attachMediaElement(this.display[0]);
      this.flvPlayer.load();
      this.flvPlayer.play();
    }
  }
}
export default FlvVideo;
