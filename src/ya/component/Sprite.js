import Base from '../interface/Base.js';
class Sprite extends Base {
  constructor() {
    super();
    this._display = $('<div class="ya-sprite"></div>');
  }
  addChild(p) {
    this._display.append(p);
  }
  show() {
    this._display.show();
  }
  hide() {
    this._display.hide();
  }
  addEvent() {

  }
  removeEvent() {

  }
  destory() {

  }
}
export default Sprite;