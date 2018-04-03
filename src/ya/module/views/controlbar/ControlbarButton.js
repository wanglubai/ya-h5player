import Sprite from "../../../component/Sprite";

class ControlbarButton extends Sprite {
  constructor() {
    super();
    this._id_ = null;
    this._status_ = 0;
    this._tips_ = null;
    this._type_ = 0;
  }
  _addEvent_() {
    this.$on("click", this._eventFun.bind(this));
    this.$on("mouseover", this._tips_Event.bind(this));
    this.$on("mouseout", this._tips_Event.bind(this));
  }
  _tips_Event(e) {
    if (!this._tips_) return;
    switch (e.type) {
      case "mouseover":
        this._showTips(e);
        break;
      case "mouseout":
        this._hideTips();
        break;
    }
  }
  _showTips(e) {
    var x = e.currentTarget.offsetLeft + this.cacheWidth / 2;
    var y = -16;
    this._tips_ && this._tips_.setShowPosition(x, y);
  }
  _hideTips() {
    this._tips_ && this._tips_.hide();
  }
  _eventFun(e) {
    if (e.type == "click") {
      this._status_ = this._status_ == 0 ? 1 : 0;
      this._updateState_();
      this._clickCall_();
    }
  }
  _clickCall_(){

  }
  _updateState_() {
    this._updateStateClass_();
  }
  _updateStateClass_() {
    if (this._type_ == 0) {
      if (this._status_ == 0) {
        this.removeClass(this._id_ + "1");
      } else {
        this.addClass(this._id_ + "1");
      }
    }
  }
  _removeEvent_() {
    this.display.off("click");
    this.display.off("mouseenter");
    this.display.off("mouseleave");
  }
  destory() {
    super.destory();
    if (this._tips_) {
      this._tips_.destory();
      this._tips_ = null;
    }
  }
}
export default ControlbarButton;
