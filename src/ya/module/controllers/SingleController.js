import BaseController from "./BaseController";
import VideoController from "./VideoController";
import BarController from "./BarController";
import ConfigModel from "../models/ConfigModel";
import PlayerModel from "../models/PlayerModel";

class SingleController extends BaseController {
  constructor() {
    super();
  }
  init() {
    ConfigModel.init();
    PlayerModel.init();
    VideoController.init();
    BarController.init();
  }
}
export default new SingleController();
