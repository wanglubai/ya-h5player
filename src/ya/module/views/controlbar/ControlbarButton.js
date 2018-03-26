import Sprite from "../../../component/Sprite";

class ControlbarButton extends Sprite {
  constructor() {
    super();
    this._initVo = null;
    this._tips = null;
    this._parent = null;
    this.initHtmlDisplay('<a class="ya-button"></a>');
  }
  _dealVo_(vo) {
    if (vo["type"] == "init") {
      this._initVo = vo["init"];
      this._instanceName = this._initVo.id;
      this.addClass("ya-" + this._initVo.id + "-btn");
      this.updateState();
      this._addEvent_();
    }
  }
  setTips(tips) {
    this._tips = tips;
    this.$on("mouseenter", this._tipsEvent.bind(this));
    this.$on("mouseleave", this._tipsEvent.bind(this));
  }
  _addEvent_() {
    this.$on("click", e => this._eventFun(e));
  }
  _tipsEvent(e) {
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
    this._tips && this._tips.setShowPosition(x, y);
  }
  _hideTips() {
    this._tips && this._tips.hide();
  }
  _eventFun(e) {
    if (e.type == "click") {
      this._initVo["value"] = this._initVo["value"] == 0 ? 1 : 0;
      this.updateState();
      this.emit({ type: ControlbarButton.ButtonClick, vo: this._initVo });
    }
  }
  updateState() {
    if (this._initVo["value"] == 0) {
      this.removeClass("ya-" + this._initVo.id + "-btn1");
    } else {
      this.addClass("ya-" + this._initVo.id + "-btn1");
    }
  }
  _removeEvent_() {
    this.display.off("click", this._eventFun);
    if (this.tips) {
      this.display.off("mouseenter", e => this._tips(e));
      this.display.off("mouseleave", e => this._tips(e));
    }
  }
  destory() {
    super.destory();
    if (this.tips) {
      this.tips.destory();
      this._tips = null;
    }
  }
}
ControlbarButton.ButtonClick = "ControlbarButtonEvent.ButtonClick";
export default ControlbarButton;
