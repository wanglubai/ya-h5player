import Base from "../../../component/Base";
import flvjs from "../../../../libs/flv/flv";
import FlvVideo from "./FlvVideo";
import FlashVideo from "./FlashVideo";

class VideoView extends Base {
  constructor() {
    super();
  }
  init() {
    if (flvjs.isSupported()) {
      this._video = new FlvVideo();
    } else {
      this._video = new FlashVideo();
    }
  }
  playUrl(url) {
    this._video.setCacheVo({ type: "url", value: url });
  }
}

export default VideoView;
