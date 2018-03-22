import Base from "../../../component/Base";
import flvjs from "../../../../libs/flv/flv";
import FlvVideo from "./FlvVideo";
import FlashVideo from "./FlashVideo";

class VideoView extends Base {
  constructor() {
    super();
  }
  init() {
    if (flvjs.isSupported() == false) {
      this._video = new FlvVideo();
    } else {
      this._video = new FlashVideo();
    }
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
