import Sprite from "../../../component/Sprite";
import { debug } from "util";
import ControlbarButtonEvent from "./ControlbarButtonEvent";

class ControlbarButton extends Sprite {
  constructor() {
    super();
    this._initVo = null;
    this.initHtmlDisplay('<a class="ya-button"></a>');
  }
  _dealVo_(vo) {
    if (vo["type"] == "init") {
      this._initVo = vo["init"];
      this._instanceName = this._initVo.id;
      this.addClass("ya-" + this._initVo.id + "-btn");
      this.updateState();
      this._addEvent_();
    }
  }
  _addEvent_() {
    this.display.on("click", e => this._eventFun(e));
  }
  _eventFun(e) {
    if (e.type == "click") {
      this._initVo["value"] = this._initVo["value"] == 0 ? 1 : 0;
      this.updateState();
      this.emit({'type':ControlbarButtonEvent.ButtonClick,'vo':this._initVo});
    }
  }
  updateState() {
    if (this._initVo["value"] == 0) {
      this.removeClass("ya-" + this._initVo.id + "-btn1");
    } else {
      this.addClass("ya-" + this._initVo.id + "-btn1");
    }
  }
  _removeEvent_() {
    this.display.on("click", this._eventFun);
  }
}
export default ControlbarButton;
