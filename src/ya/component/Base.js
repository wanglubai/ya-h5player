import debug from "./Debug.js";

//_protected_
//_private

class Base {
  constructor() {
    this._claseeName = this.constructor.name;
    this._instanceName = "null";
    this._destroy_ = false;
    debug.log("yabase");
  }

  _addEvent_() {}
  _removeEvent_() {}

  destory() {
    this._removeEvent_();
    this._destroy_ = true;
    debug.log("destory");
  }

  get destorystatus() {
    return this._destroy_;
  }
}
export default Base;
