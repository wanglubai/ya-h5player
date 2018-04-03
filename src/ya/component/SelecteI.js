import Sprite from "./Sprite";

class SelecteI extends Sprite {
  constructor() {
    super();
    this._group_ = null;
    this._status_ = 0;
  }
  register(group) {
    this._group_ = group;
  }
  setSelectedState(val) {
    this._status_ = val;
    this._updateStateView_();
  }
  _updateStateView_() {}

  getSelectedState() {
    return this._status_;
  }
}
export default SelecteI;
