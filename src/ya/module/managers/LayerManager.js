import EventDispatcher from "../../component/EventDispatcher";
import Sprite from "../../component/Sprite";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import $ from "webpack-zepto";
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
    this.LoadLayer = new Sprite().initDivDisplay("load-layer");
    this.DanmakuLayer = new Sprite().initDivDisplay("danmuku-layer");
    this.TipsLayer = new Sprite().initDivDisplay("tips-layer");
    this.GiftLayer = new Sprite().initDivDisplay("gift-layer");
    this.BarLayer = new Sprite().initDivDisplay("bar-layer");
    parent.append(
      this.VideoLayer,
      this.LoadLayer,
      this.DanmakuLayer,
      this.GiftLayer,
      this.BarLayer
    );
    this.TipsLayer.$appendTo($("body"));
    parent.$on("mousemove", this._eventFun.bind(this));
  }
  _eventFun(e) {
    switch (e.type) {
      case "mousemove":
        Dispatcher.emit(EventType.MouseMove);
        break;
    }
  }
}
var manager = new LayerManager();
export default manager;
