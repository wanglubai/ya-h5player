import Sprite from "./Sprite.js";

class Button extends Sprite {
  constructor(vo) {
    super();

    this.initDivDisplay("button");
  }
  _addEvent_() {
    super._addEvent_();
    this.display.on("click", this._eventFun);
    this.display.on("mouseenter", this._eventFun);
    this.display.on("mouseleave", this._eventFun);
  }
  _eventFun() {}
  _removeEvent_() {
    super._removeEvent_();
    this.display.on("click", this._eventFun);
    this.display.on("mouseenter", this._eventFun);
    this.display.on("mouseleave", this._eventFun);
  }
}
export default Button;
