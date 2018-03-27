import ControlbarButton from "../ControlbarButton";
import SharpnessTips from "./SharpnessTips";

class SharpnessButton extends ControlbarButton {
  constructor() {
    super();
    this.initHtmlDisplay('<a class="ya-button ya-sharpness-btn"></a>');
    this._yvo = null;
    this._tips = null;
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._yvo = vo.value;
        this._init();
        break;
    }
  }
  _init() {
    this._tips = new SharpnessTips();
    this.yparent.append(this._tips);
    this._tips.setVo({ type: "init", vo: this._yvo });
  }
}
export default SharpnessButton;
