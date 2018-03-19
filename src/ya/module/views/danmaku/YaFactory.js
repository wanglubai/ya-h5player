import YaDanmakuBase from "./YaDanmakuBase";
import Base from "../../../component/Base";

class YaFactory extends Base {
  constructor() {
    this._pool = [];
    this._isDestory = false;
  }

  destory() {
    this._isDestory = true;
  }

  create() {
    if (this._pool.length > 0) {
      return this._pool.pop();
    } else {
      var item = new YaDanmakuBase();
      return item;
    }
  }

  recycle(ele) {
    this._pool.push(ele);
  }
}

export default YaFactory;
