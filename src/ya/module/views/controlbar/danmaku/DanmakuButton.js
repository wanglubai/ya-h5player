import ControlbarButton from "../ControlbarButton";
import DescribeTips from "../../../../component/DescribeTips";

import "./DanmakuButtonCss.css";
class DanmakuButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-danmaku-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new DescribeTips();
    container.append(this, this._tips_);
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value["default"];
        this._updateView();
        break;
    }
  }
  _updateView() {
    this._updateState_();
  }
  _updateState_() {
    super._updateState_();
    if (this._status_ == 0) {
      this._tips_.setVo({
        type: DescribeTips.Type_Describe,
        value: "关闭弹幕"
      });
    } else {
      this._tips_.setVo({
        type: DescribeTips.Type_Describe,
        value: "打开弹幕"
      });
    }
  }
  _clickCall_() {
    if (this._status_ == 0) {
      this.emit(DanmakuButton.Open);
    } else {
      this.emit(DanmakuButton.Close);
    }
  }
}
DanmakuButton.Open = "DanmakuButton.Open";
DanmakuButton.Close = "DanmakuButton.Close";
export default DanmakuButton;
