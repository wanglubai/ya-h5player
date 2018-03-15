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
    this.VideoLayer = new Sprite().initDisplay("video-layer");
    this.DanmakuLayer = new Sprite().initDisplay("danmuku-layer");
    this.BarLayer = new Sprite().initDisplay("bar-layer");
    this.TipsLayer = new Sprite().initDisplay("tips-layer");
    this.GiftLayer = new Sprite().initDisplay("gift-layer");
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
