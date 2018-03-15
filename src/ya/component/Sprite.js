import EventDispatcher from "./EventDispatcher.js";
class Sprite extends EventDispatcher {
  constructor() {
    super();
    this._claseeName = "Sprite";
    this._vo = null;
    this._display = null;
  }
  init() {}
  initDisplay() {
    if (arguments.length == 0) {
      this._display = $('<div class="ya-sprite"></div>');
    } else if (arguments.length == 1) {
      this._display = $('<div class="ya-sprite ' + 'ya-' + arguments[0] + '"></div>');
    } else if (arguments.length == 2) {
      this._display = $('<' + arguments[1] + ' class="ya-sprite ' + 'ya-' + arguments[0] + '"></' + arguments[1] + '>');
    }
    return this;
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
  _init() {}
  _addClass() {
    this._display.addClass(arguments);
  }
  _removeClass() {
    this._display.removeClass(arguments);
  }
  append() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i].display);
    }
  }
  _attr(){
    this._display.attr(arguments[0],arguments[1]);
  }
  appendTo(p) {
    this._display.appendTo(p.display);
  }
  appendToById(p) {
    this._display.appendTo($("#" + p));
  }
  _getElById(id) {
    return $("#" + id);
  }
  show() {
    this._display.show();
  }
  hide() {
    this._display.hide();
  }
  _addEvent() {}
  _removeEvent() {}
  resizeFresh() {}
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
