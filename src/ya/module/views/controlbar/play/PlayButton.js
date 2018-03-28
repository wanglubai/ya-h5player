import ControlbarButton from "../ControlbarButton";
import DescribeTips from "../../../../component/DescribeTips";

import "./PlayButtonCss.css";
class PlayButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-play-btn";
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
      this._tips_.setVo({ type: DescribeTips.Type_Describe, value: "播放" });
    } else {
      this._tips_.setVo({ type: DescribeTips.Type_Describe, value: "暂停" });
    }
  }
  _clickCall_() {
    if (this._status_ == 0) {
      this.emit(PlayButton.Play);
    } else {
      this.emit(PlayButton.Pause);
    }
  }
}
PlayButton.Play = "PlayButton.Play";
PlayButton.Pause = "PlayButton.Pause";
export default PlayButton;
