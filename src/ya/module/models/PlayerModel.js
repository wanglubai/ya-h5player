import BaseModel from "./BaseModel";

class PlayerModel extends BaseModel {
  constructor() {
    super();
    this._roomId=null;
    this._param=null;
  }
}
export default new PlayerModel();
