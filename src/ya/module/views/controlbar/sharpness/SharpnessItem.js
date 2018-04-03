import SelecteI from "../../../../component/SelecteI";
import "./SharpnessItemCss.css";
import { debug } from "util";

//index
//title
class SharpnessItem extends SelecteI {
  constructor() {
    super();
    this.initDivDisplay("sharpness-item");
    this._index = 0;
    this._title = '';
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case 'init':
        this._index = vo.value.index;
        this._title = vo.value.title;
        this._status_ = vo.value.status;
        this.display.text(this._title);
        if (this._status_ == 1) {
          this._group_.setSelected(this, 1);
        }
        this._updateStateView_();
        break;
    }
  }
  _addEvent_() {
    this.$on("click", this._eventFun.bind(this));
  }
  _eventFun(e) {
    switch (e.type) {
      case "click":
        this._group_.setSelected(this);
        break;
    }
  }
  _updateStateView_() {
    if (this._status_ == 0) {
      this.addClass("sharpness-item-statu0");
      this.removeClass("sharpness-item-statu1");
    } else {
      this.addClass("sharpness-item-statu1");
      this.removeClass("sharpness-item-statu0");
    }
  }
  get vo() {
    return { 'index': this._index, 'title': this._title }
  }
}
export default SharpnessItem;
