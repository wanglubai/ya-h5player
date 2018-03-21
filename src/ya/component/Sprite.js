import EventDispatcher from "./EventDispatcher.js";
class Sprite extends EventDispatcher {
  constructor() {
    super();
    this._claseeName = "Sprite";
    this._vo = null;
    this._display = null;
    this._cacheVos = [];
    this._resReady = false;
  }

  _updateVo() {
    while (this._cacheVos.length > 0) {
      this._dealVo_(this._cacheVos.shift());
    }
  }

  _dealVo_(vo) {}
  _addEvent_() {}
  _removeEvent_() {}

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
  setCacheVo(vo) {
    this._cacheVos.push(vo);
    if (this._resReady) {
      this._updateVo();
    }
  }

  setVo(vo) {
    this._vo = vo;
    this._dealVo_(this._vo);
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
      debugger
      this._display.addClass(arguments[i]);
    }
  }
  removeClass() {
    this._display.removeClass(arguments);
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

  resizeFresh() {}
  destory() {
    this.removeEvent();
    super.destory();
  }

  set resReady(bl) {
    if (bl) {
      this._resReady = true;
      this._updateVo();
    }
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
