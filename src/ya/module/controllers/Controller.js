import BaseController from "./BaseController";
import VideoController from "./VideoController";
import BarController from "./BarController";

class Controller extends BaseController {
  constructor() {
    super();
  }
  init() {
    VideoController.init();
    BarController.init();
  }
}
export default new Controller();
