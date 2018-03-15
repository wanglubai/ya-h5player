import debug from "./Debug.js";

class Base {
  constructor() {
    this._claseeName = "Base";
    debug.log("yabase");
  }
  destory() {
    debug.log("destory");
  }
}
export default Base;
