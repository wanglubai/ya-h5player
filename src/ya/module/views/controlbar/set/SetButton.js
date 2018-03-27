import ControlbarButton from "../ControlbarButton";
import DescribeTips from "../../../../component/DescribeTips";

import "./SetButtonCss.css";
import SetTips from "./SetTips";
class SetButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-set-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new SetTips();
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
  }
}
SetButton.Change = "SetButton.Change";
export default SetButton;
