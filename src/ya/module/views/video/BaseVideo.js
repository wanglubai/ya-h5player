import Sprite from "../../../component/Sprite";

class BaseVideo extends Sprite {
  constructor() {
    super();
  }
  play() {}
  pause() {}
}
BaseVideo.VideoLoadState = "BaseVideo.VideoLoadState";
BaseVideo.VideoPlayState = "BaseVideo.VideoPlayState";
BaseVideo.VideoErrorState = "BaseVideo.VideoErrorState";
export default BaseVideo;
