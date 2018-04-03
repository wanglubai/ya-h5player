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

  play() {
    this.display[0].play();
  }
  pause() {
    this.display[0].pause();
  }

  _dealVo_(vo) {
    if (this.destorystatus) return;
    if (vo["type"] == "url") {
      this._playUrl(vo.value);
    } else if (vo.type == "play") {
      this.display[0].play();
    } else if (vo.type == "pause") {
      this.display[0].pause();
    } else if (vo.type == "volume") {
      this.display[0].volume = Math.min(1, Math.max(0, vo.value / 100));
    } else if (vo.type == 'sharpness') {
      this._playVo(vo.value);
    }
  }
  _playVo(vo) {
    if (this.flvPlayer) {
      this.flvPlayer.destroy();
    }
    this.flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: vo.url
    });
    this.flvPlayer.on("media_info", this._mediaInfoFun.bind(this));
    this.flvPlayer.attachMediaElement(this.display[0]);
    this.flvPlayer.load();
    this.flvPlayer.play();
  }
  _playUrl(url) {
    if (this.flvPlayer) {
      this.flvPlayer.destroy();
    }
    this.flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: url
    });
    this.flvPlayer.on("media_info", this._mediaInfoFun.bind(this));
    this.flvPlayer.attachMediaElement(this.display[0]);
    this.flvPlayer.load();
    this.flvPlayer.play();
  }
  _mediaInfoFun(e) {
    this.emit(BaseVideo.VideoPlayState);
  }
}
export default FlvVideo;
