import Sprite from "../../../component/Sprite";

class ControlbarButton extends Sprite {
  constructor() {
    super();
    this._initVo_ = null;
    this._tips_ = null;
    this._parent = null;
  }
  _dealVo_(vo) {
    if (vo["type"] == "init") {
      this._initVo_ = vo["value"];
      this._init();
    }
  }
  _init() {
    this.initHtmlDisplay('<a class="ya-button ya-' + this._initVo_.id + '-btn></a>');
    this.updateState();
    this._addEvent_();
  }
  setTips(tips) {
    this._tips_ = tips;
    this.yparent.append(this._tips_);
    this.$on("mouseenter", this._tips_Event.bind(this));
    this.$on("mouseleave", this._tips_Event.bind(this));
  }
  _addEvent_() {
    this.$on("click", this._eventFun.bind(this));
  }
  _tips_Event(e) {
    switch (e.type) {
      case "mouseenter":
        this._showTips();
        break;
      case "mouseleave":
        this._hideTips();
        break;
    }
  }
  _showTips(e) {
    var x = this.$position()["left"] + this.cacheWidth / 2;
    var y = this.$position()["top"];
    this._tips_ && this._tips_.setShowPosition(x, y);
  }
  _hideTips() {
    this._tips_ && this._tips_.hide();
  }
  _eventFun(e) {
    if (e.type == "click") {
      this._initVo_["value"] = this._initVo_["value"] == 0 ? 1 : 0;
      this.updateState();
      this.emit({ type: ControlbarButton.ButtonClick, vo: this._initVo_ });
    }
  }
  updateState() {
    if (this._initVo_["value"] == 0) {
      this.removeClass("ya-" + this._initVo_.id + "-btn1");
    } else {
      this.addClass("ya-" + this._initVo_.id + "-btn1");
    }
  }
  _removeEvent_() {
    this.display.off("click");
    if (this._tips_) {
      this.display.off("mouseenter");
      this.display.off("mouseleave");
    }
  }
  destory() {
    super.destory();
    if (this._tips_) {
      this._tips_.destory();
      this._tips_ = null;
    }
  }
}
ControlbarButton.ButtonClick = "ControlbarButtonEvent.ButtonClick";
export default ControlbarButton;
