import EventDispatcher from "./EventDispatcher.js";
class Sprite extends EventDispatcher {
  constructor() {
    super();
    this._display = null;
  }

  initDisplay(display) {
    this._display = display;
    return this;
  }
  initHtmlDisplay(str) {
    this._display = $(str);
    return this;
  }
  initDivDisplay(className) {
    this._display = $('<div class="ya-' + className + '"></div>');
    return this;
  }

  css() {
    if (arguments.length == 1) {
      return this._display.css(arguments[0]);
    } else {
      this._display.css(arguments[0], arguments[1]);
    }
  }
  attr() {
    this._display.attr(arguments[0], arguments[1]);
  }
  addClass() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.addClass(arguments[i]);
    }
  }
  removeClass() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.removeClass(arguments[i]);
    }
  }
  append$() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i]);
    }
  }
  append() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i].display);
    }
  }
  appendTo(p) {
    this._display.appendTo(p.display);
  }
  appendToById(id) {
    this._display.appendTo($("#" + id));
  }
  show() {
    this._display.show();
  }
  hide() {
    this._display.hide();
  }
  $on() {
    this._display.on(arguments[0], arguments[1]);
  }

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
