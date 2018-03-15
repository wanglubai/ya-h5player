import BaseController from "./BaseController";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import FlashVideo from "../views/video/FlashVideo";
import FlvPlayer from "../views/video/FlvVideo";
import flvjs from "../../../libs/flv/flv";
import VideoView from "../views/VideoView";
import LayerManage from "../managers/LayerManager";

class VideoController extends BaseController {
  constructor() {
    super();
    this._video = null;
    Dispatcher.addEventListener(EventType.InnerInit, this.eventFun);
    
  }
  flashCallFun() {}
  eventFun(e) {
    if (e.type == EventType.InnerInit) {
      this._video = new FlashVideo();
      LayerManage.VideoLayer.append(this._video);
      // flvjs;
      // if (flvjs.isSupported()) {
      //   this._video = new FlvPlayer();
      // } else {
      //   this._video = new FlashVideo();
      // }
    }
  }
}
export default new VideoController();
