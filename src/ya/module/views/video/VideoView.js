import Base from "../../../component/Base";
import flvjs from "../../../../libs/flv/flv";
import FlvVideo from "./FlvVideo";
import FlashVideo from "./FlashVideo";
import Dispatcher from "../../../component/Dispatcher";
import EventType from "../../../component/EventType";
import VideoLoad from "./VideoLoad";
import VideoEvent from "./VideoEvent";

class VideoView extends Base {
  constructor() {
    super();
    this._videoLoad = null;
    this._video = null;
    this._conf = null;
  }
  _addEvent_() {
    this._video.on(VideoEvent.VideoLoadState, e => this.eventFun(e));
    this._video.on(VideoEvent.VideoPlayState, e => this.eventFun(e));
  }
  eventFun(e) {
    switch (e.type) {
      case VideoEvent.VideoLoadState:
        this.showLoad();
        break;
      case VideoEvent.VideoPlayState:
        this.hideLoad();
        break;
    }
  }
  init(conf) {
    this._initVideo();
    this._initVideoLogo();
    this._addEvent_();
  }

  showLoad() {
    this._videoLoad && this._videoLoad.show();
  }
  hideLoad() {
    this._videoLoad && this._videoLoad.hide();
  }

  _initVideo() {
    if (!flvjs.isSupported()) {
      this._video = new FlvVideo();
    } else {
      this._video = new FlashVideo();
    }
  }
  _initVideoLogo() {
    this._videoLoad = new VideoLoad();
    this._videoLoad.setVo({ type: "init", init: this._conf });
  }
  playUrl(url) {
    this._video.setCacheVo({ type: "url", value: url });
  }
  play() {
    this._video.setCacheVo({ type: "play", value: 1 });
  }
  pause() {
    this._video.setCacheVo({ type: "pause", value: 1 });
  }
  volume(val) {
    this._video.setCacheVo({ type: "volume", value: val });
  }
}

export default VideoView;
