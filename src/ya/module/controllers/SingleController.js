import BaseController from "./BaseController";
import VideoController from "./VideoController";
import BarController from "./BarController";
import ConfigModel from "../models/ConfigModel";
import PlayerModel from "../models/PlayerModel";
import DanmakuController from "./DanmakuController";

class SingleController extends BaseController {
  constructor() {
    super();
  }
  init() {
    ConfigModel.init();
    PlayerModel.init();
    VideoController.init();
    BarController.init();
    DanmakuController.init();
  }
}
export default new SingleController();
