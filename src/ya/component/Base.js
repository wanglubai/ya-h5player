import debug from "./Debug.js";

//_protected_
//_private

class Base {
  constructor() {
    this._claseeName = this.constructor.name;
    this._instanceName = "null";
    this._resReady = false;
    this._destroy_ = false;
    this._cacheVos = [];
    this._vo = null;
    debug.log("yabase");
  }

  setCacheVo(vo) {
    if (this.destorystatus) return;
    this._cacheVos.push(vo);
    if (this._resReady) {
      this._updateVo();
    }
  }
  setVo(vo) {
    if (this.destorystatus) return;
    this._vo = vo;
    this._dealVo_(this._vo);
  }

  _dealVo_(vo) {}
  _addEvent_() {}
  _removeEvent_() {}

  _updateVo() {
    if (this.destorystatus) return;
    while (this._cacheVos.length > 0) {
      this._dealVo_(this._cacheVos.shift());
    }
  }

  set resReady(bl) {
    if (bl) {
      this._resReady = true;
      this._updateVo();
    }
  }

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
