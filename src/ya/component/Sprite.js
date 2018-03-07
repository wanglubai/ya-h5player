import Base from '../interface/Base.js';
class Sprite extends Base {
  constructor() {
    super();
    this._claseeName = 'Sprite';
    this._vo = null;
    this._display = null;
  }
  _initDisplay() {
    if (arguments.length == 0) {
      this._display = $('<div class="ya-sprite"></div>');
    } else if (arguments.length == 1) {
      this._display = $('<div class="ya-sprite ' + 'ya-' + arguments[0] + '"></div>');
    } else if (arguments.length == 2) {
      this._display = $('<' + arguments[1] + ' class="ya-sprite ' + 'ya-' + arguments[0] + '"></' + arguments[1] + '>');
    }
  }
  _init(){
    
  }
  appendD(p) {
    this._display.append(p);
  }
  appendDTo(p) {
    this._display.appendTo(p);
  }
  append(p) {
    this._display.append(p.display);
  }
  appendTo(p) {
    this._display.appendTo(p.display);
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
  resizeFresh() {

  }
  destory() {
    this.removeEvent();
    super.destory();
  }

  get display() {
    return this._display;
  }

  set vo(param) {
    this._vo = param;
  }
  get vo() {
    return this._vo;
  }
}
export default Sprite;