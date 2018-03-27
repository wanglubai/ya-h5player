import SelecteI from "../../../../component/SelecteI";
import "./SharpnessItemCss.css";

class SharpnessItem extends SelecteI {
  constructor() {
    super();
    this.initDivDisplay("sharpness-item");
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
  _updateView_() {
    if (this._state_ == 0) {
      this.addClass("sharpness-item-statu0");
      this.removeClass("sharpness-item-statu1");
    } else {
      this.addClass("sharpness-item-statu1");
      this.removeClass("sharpness-item-statu0");
    }
  }
}
export default SharpnessItem;
