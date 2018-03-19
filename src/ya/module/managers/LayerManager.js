import EventDispatcher from "../../component/EventDispatcher";
import Sprite from "../../component/Sprite";

class LayerManager extends EventDispatcher {
  constructor() {
    super();
    this.VideoLayer = null;
    this.DanmakuLayer = null;
    this.BarLayer = null;
    this.TipsLayer = null;
    this.GiftLayer = null;
  }
  init(parent) {
    this.VideoLayer = new Sprite().initDivDisplay("video-layer");
    this.DanmakuLayer = new Sprite().initDivDisplay("danmuku-layer");
    this.BarLayer = new Sprite().initDivDisplay("bar-layer");
    this.TipsLayer = new Sprite().initDivDisplay("tips-layer");
    this.GiftLayer = new Sprite().initDivDisplay("gift-layer");
    parent.append(
      this.VideoLayer,
      this.DanmakuLayer,
      this.BarLayer,
      this.TipsLayer,
      this.GiftLayer
    );
  }
}
export default new LayerManager();
