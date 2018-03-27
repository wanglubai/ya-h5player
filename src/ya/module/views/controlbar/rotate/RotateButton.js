import ControlbarButton from "../ControlbarButton";
import './RotateButtonCss.css';
import DescribeTips from "../../../../component/DescribeTips";

class RotateButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-rotate-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new DescribeTips();
    container.append(this, this._tips_);
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value;
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
        value: "旋转视频"
      });
    } else {
      this._tips_.setVo({
        type: DescribeTips.Type_Describe,
        value: "旋转视频"
      });
    }
  }
}
export default RotateButton;
