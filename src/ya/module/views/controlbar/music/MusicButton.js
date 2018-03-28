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
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value["default"];
        break;
    }
  }
}
MusicButton.Change = "MusicButton.Change";
export default MusicButton;
