import ControlbarButton from "../ControlbarButton";
import DescribeTips from "../../../../component/DescribeTips";

import "./RefreshButtonCss.css";
class RefreshButton extends ControlbarButton {
  constructor(container) {
    super();
    this._type_ = 1;
    this._id_ = "ya-refresh-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new DescribeTips();
    this._tips_.setVo({
      type: DescribeTips.Type_Describe,
      value: "旋转视频"
    });
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
  }
  _clickCall_(){
    this.emit(RefreshButton.Change);
  }
}
RefreshButton.Change='RefreshButton.Change';
export default RefreshButton;
