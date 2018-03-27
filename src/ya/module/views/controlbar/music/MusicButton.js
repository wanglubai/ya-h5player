import ControlbarButton from "../ControlbarButton";
import MusicTips from "./MusicTips";

class MusicButton extends ControlbarButton {
  constructor() {
    super();
    this.initHtmlDisplay('<a class="ya-music-btn"></a>');
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._initVo_ = vo.value;
        this._init();
        break;
      default:
        break;
    }
  }
  _init() {
    this.updateState();
    this._addEvent_();
    var tips = new MusicTips();
    this.setTips(tips);
    tips.setVo({ type: "init", value: this._initVo_["value"] });
  }
}
export default MusicButton;
