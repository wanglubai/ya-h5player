import EventDispatcher from "../../component/EventDispatcher";
import ConfigModel from "./ConfigModel";
import PlayerModel from "./PlayerModel";

class BaseModel extends EventDispatcher {
  constructor() {
    super();
  }
  init() {
    ConfigModel.init();
    PlayerModel.init();
  }
}
export default new BaseModel();
