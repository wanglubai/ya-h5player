import BaseController from "./BaseController";
import Dispatcher from "../../component/Dispatcher";
import EventType from "../../component/EventType";
import FlashVideo from "../views/video/FlashVideo";
import FlvPlayer from "../views/video/FlvVideo";
import flvjs from "../../../libs/flv/flv";
import LayerManage from "../managers/LayerManager";
import FlvVideo from "../views/video/FlvVideo";
import VideoView from "../views/video/VideoView";
import Debug from "../../component/Debug";
import ConfigModel from "../models/ConfigModel";
import ModelEvent from "../models/ModelEvent";

class VideoController extends BaseController {
  constructor() {
    super();
    this._videoView = null;
    this._model = ConfigModel;
  }
  _addEvent_() {
    Dispatcher.ons(
      EventType.InnerInit,
      EventType.DataPause,
      EventType.DataPlay,
      this.eventFun.bind(this)
    );
    ConfigModel.ons(
      ModelEvent.PlayByUi,
      ModelEvent.PauseByUi,
      ModelEvent.ChangeVolumeByUi,
      ModelEvent.SharpnessVoChangeByUi,
      ModelEvent.SharpnessVosByApi,
      this._eventFun.bind(this)
    );
  }
  init() {
    this._addEvent_();
  }
  _eventFun(e) {
    switch (e.type) {
      case ModelEvent.PlayByUi:
        this._videoPlay();
        break;
      case ModelEvent.PauseByUi:
        this._videoPause();
        break;
      case ModelEvent.ChangeVolumeByUi:
        this._changeVolume();
        break;
      case ModelEvent.SharpnessVoChangeByUi:
      case ModelEvent.SharpnessVosByApi:
        this._changeSharpness();
        break;
    }
  }
  eventFun(e) {
    switch (e.type) {
      case EventType.InnerInit:
        this._initVideoView();
        break;
      case EventType.DataPlay:
        this._videoPlay();
        break;
      case EventType.DataPause:
        this._videoPause();
        break;
      default:
        Debug.log("VideoController No match " + e.type);
        break;
    }
  }
  _videoPause() {
    this._videoView && this._videoView.pause();
  }
  _videoPlay() {
    this._videoView && this._videoView.play();
  }
  _changeVolume() {
    this._videoView &&
      this._videoView.setVo({ type: "volume", value: this._model.volume });
  }
  _initVideoView() {
    if (this._videoView == null) {
      this._videoView = new VideoView();
      this._videoView.setVo({ type: "init", volume: this._model.volume });
    }
  }
  _changeSharpness() {
    if (this._videoView) {
      this._videoView.setVo({ 'type': 'sharpness', value: this._model.curSharpnessVo });
    }
  }
}
export default new VideoController();
