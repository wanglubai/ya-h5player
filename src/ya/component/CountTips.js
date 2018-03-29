import BaseTips from "./BaseTips";

class CountTips extends BaseTips {
  constructor() {
    super();
    this._conut = null;
  }
  _addEvent_() {
    this.$on("mouseenter", this.show.bind(this));
    this.$on("mouseleave", this._hide.bind(this));
  }
  show() {
    this._clearCount();
    super.show();
  }
  hide() {
    this._clearCount();
    this._addCount();
  }
  _addCount() {
    this._conut = setTimeout(this._hide.bind(this), 1000);
  }
  _hide() {
    super.hide();
    this._clearCount();
  }
  _clearCount() {
    if (this._conut) {
      clearTimeout(this._conut);
      this._conut = null;
    }
  }
}
export default CountTips;
