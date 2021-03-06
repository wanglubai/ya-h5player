import Sprite from "./Sprite.js";

class Button extends Sprite {
  constructor(vo) {
    super();
    this.initHtmlDisplay('<a class="ya-button"></a>');
  }
  _dealVo_(vo) {
    console.log(vo);
    if (vo["type"] == "classname") {
      this.addClass(vo.classname);
    }
  }
  _addEvent_() {
    this.display.on("click", this._eventFun);
  }
  _eventFun() {}
  _removeEvent_() {
    this.display.on("click", this._eventFun);
  }
}
export default Button;
