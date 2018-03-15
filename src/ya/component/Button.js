import Sprite from './Sprite.js';

class Button extends Sprite {
  constructor(vo) {
    super();

    this._vo = vo;
    this._instanceName = '';
    this._status = '';
    this._status = 0;

    this._initDisplay();
    this._init();
  }
  _init() {
    this._addClass('button');
    this._vo && this._vo.className ? this._addClass(this._vo.className) : '';
    this._addClass('ya-button-' + this._instanceName + this._init);
  }
  _addEvent() {
    this._display.on('click', this._eventFun);
    this._display.on('mouseenter', this._eventFun);
    this._display.on('mouseleave', this._eventFun);
  }
  _eventFun() {

  }
  _removeEvent() {
    this._display.on('click', this._eventFun);
    this._display.on('mouseenter', this._eventFun);
    this._display.on('mouseleave', this._eventFun);
  }
  // set status() {

  // }
  // get status() {

  // }
}
export default Button;