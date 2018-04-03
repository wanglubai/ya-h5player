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

  _addEvent_() {
    super._addEvent_();
    if (this._tips_) {
      this._tips_.ons(
        SetTips.ChangeDensity,
        SetTips.ChangeAlpha,
        SetTips.ChangeAnimation,
        SetTips.ChangeCar,
        SetTips.ChangeLocation,
        this._tipsCall.bind(this)
      );
    }
  }
  _tipsCall(e) {
    switch (e.type) {
      case SetTips.ChangeDensity:
        this.emit({
          type: SetButton.Change,
          action: "density",
          value: e.value
        });
        break;
      case SetTips.ChangeAlpha:
        this.emit({ type: SetButton.Change, action: "alpha", value: e.value });
        break;
      case SetTips.ChangeAnimation:
        this.emit({
          type: SetButton.Change,
          action: "animation",
          value: e.value
        });
        break;
      case SetTips.ChangeCar:
        this.emit({ type: SetButton.Change, action: "car", value: e.value });
        break;
      case SetTips.ChangeLocation:
        this.emit({
          type: SetButton.Change,
          action: "location",
          value: e.value
        });
        break;
    }
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value["default"];
        this._tips_.setVo({
          type: "init",
          density: vo.value["density"],
          alpha: vo.value["alpha"],
          animation: vo.value["animation"],
          car: vo.value["car"],
          location: vo.value["location"]
        });
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
