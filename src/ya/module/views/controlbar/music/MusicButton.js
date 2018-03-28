import ControlbarButton from "../ControlbarButton";
import "./MusicButtonCss.css";
import MusicTips from "./MusicTips";
class MusicButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-music-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new MusicTips();
    container.append(this, this._tips_);
    this._addEvent_();
  }
  _addEvent_() {
    super._addEvent_();
    if (this._tips_) {
      this._tips_.on(MusicTips.Value_Change, this._tipsEventFun.bind(this));
    }
  }
  _tipsEventFun() {}
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value["default"] == 0 ? 1 : 0;
        debugger
        this._tips_.setVo({ type: "init", value: vo.value["default"] });
        this._updateView();
        break;
    }
  }
  _updateView() {
    this._updateState_();
  }
  _clickCall_() {
    if (this._status_ == 0) {
      this._tips_.setVo({ type: "change", value: 20 });
    } else {
      this._tips_.setVo({ type: "change", value: 0 });
    }
  }
}
MusicButton.Change = "MusicButton.Change";
export default MusicButton;
