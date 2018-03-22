import Sprite from "../../../component/Sprite";
import LayerManager from "../../managers/LayerManager";
import "./VideoLoadCss.css";
class VideoLoad extends Sprite {
  constructor() {
    super();
    this.initDivDisplay("videoload");
    LayerManager.LoadLayer.append(this);
  }
}
export default VideoLoad;
