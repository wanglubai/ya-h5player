import Sprite from "./Sprite";

class SelecteI extends Sprite {
  constructor() {
    super();
    this._group_ = null;
    this._state_ = 0;
  }
  register(group) {
    this._group_ = group;
  }
  setSelectedState(val) {
    this._state_ = val;
    this._updateView();
  }
  _updateView_() {}

  getSelectedState() {
    return this._state_;
  }
}
export default SelecteI;
