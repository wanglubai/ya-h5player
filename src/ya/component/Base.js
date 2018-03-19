import debug from "./Debug.js";

//_protected_
//_private

class Base {
  constructor() {
    this._claseeName = "Base";
    this._destroy = false;
    debug.log("yabase");
  }

  destory() {
    this._destroy = true;
    debug.log("destory");
  }

  get destory() {
    return this._destroy;
  }
}
export default Base;
