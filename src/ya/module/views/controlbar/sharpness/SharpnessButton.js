import ControlbarButton from "../ControlbarButton";
import SharpnessTips from "./SharpnessTips";
import './SharpnessButtonCss.css'
class SharpnessButton extends ControlbarButton {
  constructor(container) {
    super();
    this._type_ = 1;
    this.initHtmlDisplay('<a class="ya-button ya-sharpness-btn"></a>');
    this._tips_ = new SharpnessTips();
    container.append(this, this._tips_);
    this.updateText('ass');
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        break;
      case 'sharpnessVos':
        this._tips_.setVo({ 'type': 'sharpnessVos', 'value': vo.value });
        break;
    }
  }
  updateText(txt) {
    this.display.text(txt);
  }
}
export default SharpnessButton;
