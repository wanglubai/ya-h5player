import BaseController from "./BaseController";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import FlashVideo from "../views/video/FlashVideo";
import FlvPlayer from "../views/video/FlvVideo";
import flvjs from "../../../libs/flv/flv";
import LayerManage from "../managers/LayerManager";
import FlvVideo from "../views/video/FlvVideo";
import VideoView from "../views/video/VideoView";
import { debug } from "util";

class VideoController extends BaseController {
  constructor() {
    super();
    this._videoView = null;
  }
  init() {
    Dispatcher.ons(
      EventType.UiPlay,
      EventType.UiPause,
      EventType.InnerInit,
      EventType.DataPause,
      EventType.DataPlay,
      this.eventFun.bind(this)
    );
  }
  eventFun(e) {
    if (e.type == EventType.InnerInit) {
      this._videoView = new VideoView();
      this._videoView.init();
      this._videoView.playUrl(
        "http://180.153.100.182/flvtx.plu.cn/onlive/ffe20d67d3684b678054b1e48cf6739c.flv?txSecret=626678fa70d7721e26eaa0d2277a22f3&txTime=5aaa77e3&dispatch_from=ztc10.236.21.177&utime=1521120678483"
      );
    } else if (e.type == EventType.DataPlay) {
      this._videoView.play();
    } else if (e.type == EventType.DataPause) {
      this._videoView.pause();
    } else if (e.type == EventType.UiPlay) {
      this._videoView.play();
    } else if (e.type == EventType.UiPause) {
      this._videoView.pause();
    }
  }
}
export default new VideoController();
