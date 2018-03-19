import BaseVideo from "./BaseVideo";
import flvjs from "../../../../libs/flv/flv";
import LayerManager from "../../managers/LayerManager";

class FlvVideo extends BaseVideo {
  constructor() {
    super();
    this.initHtmlDisplay('<video class="ya-h5-video"></video>');
    LayerManager.VideoLayer.append(this);
    this.resReady = true;
  }
  _dealVo_(vo) {
    if (vo["type"] == "url") {
      this.playUrl(vo.value);
    }
  }
  playUrl(url) {
    if (this.flvPlayer == null) {
      this.flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: url
      });
      this.flvPlayer.attachMediaElement(this.display[0]);
      this.flvPlayer.load();
      this.flvPlayer.play();
    }
  }
}
export default FlvVideo;
