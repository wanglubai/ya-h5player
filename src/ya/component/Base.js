import debug from "./Debug.js";

//_protected_
//_private

class Base {
  constructor() {
    this._claseeName = this.constructor.name;
    this._instanceName = "null";
    this._destroy = false;
    debug.log("yabase");
  }

  _addEvent_() {}
  _removeEvent_() {}

  destory() {
    this._destroy = true;
    debug.log("destory");
  }

  get destory() {
    return this._destroy;
  }
}
export default Base;
