import BaseController from "./BaseController";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import FlashVideo from "../views/video/FlashVideo";
import FlvPlayer from "../views/video/FlvVideo";
import flvjs from "../../../libs/flv/flv";
import LayerManage from "../managers/LayerManager";
import FlvVideo from "../views/video/FlvVideo";
import VideoView from "../views/video/VideoView";

class VideoController extends BaseController {
  constructor() {
    super();
    this._videoView = null;
  }
  init() {
    Dispatcher.addEventListener(EventType.InnerInit, this.eventFun.bind(vo));
    Dispatcher.addEventListener(EventType.VideoPlay, e => this.eventFun(e));
    Dispatcher.addEventListener(EventType.VideoPause, e => this.eventFun(e));
  }
  eventFun(e) {
    if (e.type == EventType.InnerInit) {
      this._videoView = new VideoView();
      this._videoView.init();
      this._videoView.playUrl(
        "http://180.153.100.182/flvtx.plu.cn/onlive/ffe20d67d3684b678054b1e48cf6739c.flv?txSecret=626678fa70d7721e26eaa0d2277a22f3&txTime=5aaa77e3&dispatch_from=ztc10.236.21.177&utime=1521120678483"
      );
    } else if (e.type == EventType.VideoPlay) {
      this._videoView.play();
    } else if (e.type == EventType.VideoPause) {
      this._videoView.pause();
    }
  }
}
export default new VideoController();
