import ControlbarButton from "../ControlbarButton";
import SharpnessTips from "./SharpnessTips";
import "./SharpnessButtonCss.css";
class SharpnessButton extends ControlbarButton {
  constructor(container) {
    super();
    this._type_ = 1;
    this.initHtmlDisplay('<a class="ya-button ya-sharpness-btn"></a>');
    this._tips_ = new SharpnessTips();
    container.append(this, this._tips_);
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        break;
      case "sharpnessVos":
        for (var i in vo.value) {
          if (vo.value[i]["status"] == 1) {
            this._updateText(vo.value[i]["title"]);
          }
        }
        this._tips_.setVo({ type: "sharpnessVos", value: vo.value });
        break;
    }
  }
  _addEvent_() {
    super._addEvent_();
    this._tips_.ons(SharpnessTips.Change, this._eventFun.bind(this));
  }
  _eventFun(e) {
    switch (e.type) {
      case SharpnessTips.Change:
        this._updateText(e.value["title"]);
        this._tipsChange(e.value);
        break;
    }
  }
  _tipsChange(vo) {
    this.emit({ type: SharpnessButton.Change, value: vo });
  }
  _updateText(txt) {
    this.display.text(txt);
  }
}
SharpnessButton.Change = "SharpnessButton.Change";
export default SharpnessButton;
