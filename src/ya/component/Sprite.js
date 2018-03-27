import EventDispatcher from "./EventDispatcher.js";
import { debug } from "util";
class Sprite extends EventDispatcher {
  constructor() {
    super();
    this._display = null;
    this._width = null;
    this._height = null;
    this._yparent = null;
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
  $position() {
    return this._display.position();
  }
  $find() {
    return this._display.find(arguments[0]);
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
  $append() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i]);
      arguments[i].yparent = this;
    }
  }
  $appendTo() {
    this._display.appendTo(arguments[0]);
    this._yparent = arguments[0];
  }
  append() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i].display);
      arguments[i].yparent = this;
    }
  }
  get offset_left() {
    return this._display.offset().left;
  }
  get offset_top() {
    return this._display.offset().top;
  }
  appendTo(p) {
    this._display.appendTo(p.display);
    this._yparent = p;
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
  $text() {
    this._display.text(arguments[0]);
  }
  resizeFresh() {}
  destory() {
    this.removeEvent();
    super.destory();
  }
  get yparent() {
    return this._yparent;
  }
  set yparent(yparent) {
    this._yparent = yparent;
  }
  get cacheWidth() {
    if (!this._width) {
      this._width = this._display.outerWidth();
    }
    return this._width;
  }
  get cacheHeight() {
    if (!this._height) {
      this._height = this._display.height();
    }
    return this._height;
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
