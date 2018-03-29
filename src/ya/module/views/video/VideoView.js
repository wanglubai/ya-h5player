import flvjs from "../../../../libs/flv/flv";
import FlvVideo from "./FlvVideo";
import FlashVideo from "./FlashVideo";
import Dispatcher from "../../../component/Dispatcher";
import EventType from "../../../component/EventType";
import VideoLoad from "./VideoLoad";
import BaseVideo from "./BaseVideo";
import EventDispatcher from "../../../component/EventDispatcher";
import "./VideoViewCss.css";

class VideoView extends EventDispatcher {
  constructor() {
    super();
    this._videoLoad = null;
    this._video = null;
    this._conf = null;
  }
  _addEvent_() {
    this._video.ons(
      BaseVideo.VideoLoadState,
      BaseVideo.VideoPlayState,
      BaseVideo.VideoErrorState,
      this.eventFun.bind(this)
    );
  }
  eventFun(e) {
    switch (e.type) {
      case BaseVideo.VideoLoadState:
        this.showLoad();
        break;
      case BaseVideo.VideoPlayState:
        this.hideLoad();
        break;
      case BaseVideo.VideoErrorState:
        this.videoError();
        break;
    }
  }

  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._init();
        this.volume(vo.volume);
        break;
      case "volume":
        this.volume(vo.value);
        break;
    }
  }

  _init() {
    this._initVideo();
    this._initVideoLogo();
    this._addEvent_();
  }

  videoError() {
    this.emit(VideoView.VideoErrorState);
  }
  showLoad() {
    this._videoLoad && this._videoLoad.show();
  }
  hideLoad() {
    this._videoLoad && this._videoLoad.hide();
  }

  _initVideo() {
    if (flvjs.isSupported()) {
      this._video = new FlvVideo();
    } else {
      this._video = new FlashVideo();
    }
  }
  _initVideoLogo() {
    this._videoLoad = new VideoLoad();
    this._videoLoad.setVo({ type: "init", init: this._conf });
  }
  volume(v) {
    this._video.setCacheVo({ type: "volume", value: v });
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
VideoView.VideoErrorState = "VideoView.VideoErrorState";
export default VideoView;
