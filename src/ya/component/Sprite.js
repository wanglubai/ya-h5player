import EventDispatcher from "./EventDispatcher.js";
class Sprite extends EventDispatcher {
  constructor() {
    super();
    this._claseeName = "Sprite";
    this._vo = null;
    this._display = null;
    this._resReady = false;
    this._cacheVo = [];
  }
  initDisplay() {
    if (arguments.length == 0) {
      this._initDisplay();
    } else if (arguments.length == 1) {
      this._initDisplay(arguments[0]);
    } else if (arguments.length == 2) {
      this._initDisplay(arguments[0], arguments[1]);
    }
    return this;
  }
  _initDisplay() {
    if (arguments.length == 0) {
      this._display = $('<div class="ya-sprite"></div>');
    } else if (arguments.length == 1) {
      this._display = $('<div class="ya-sprite ' + 'ya-' + arguments[0] + '"></div>');
    } else if (arguments.length == 2) {
      this._display = $('<' + arguments[0] + ' class="ya-sprite ' + 'ya-' + arguments[1] + '"></' + arguments[1] + '>');
    }
  }
  _addClass() {
    this._display.addClass(arguments);
  }
  _removeClass() {
    this._display.removeClass(arguments);
  }
  _attr() {
    this._display.attr(arguments[0], arguments[1]);
  }
  _getElById(id) {
    return $("#" + id);
  }
  _addEvent() { }
  _removeEvent() { }

  append() {
    for (var i = 0; i < arguments.length; i++) {
      this._display.append(arguments[i].display);
    }
  }
  appendTo(p) {
    this._display.appendTo(p.display);
  }
  appendToById(p) {
    this._display.appendTo($("#" + p));
  }
  show() {
    this._display.show();
  }
  hide() {
    this._display.hide();
  }


  setVo(vo) {
    this._cacheVo.push(vo);
    if (this._resReady) {
      this.updateVo();
    }
  }
  updateVo() {
    while (this._cacheVo.length > 0) {
      this._dealVo(this._cacheVo.shift());
    }
  }
  _dealVo(vo) {
  }

  resizeFresh() { }
  destory() {
    this.removeEvent();
    super.destory();
  }

  set resReady(bl) {
    if (bl) {
      this._resReady = true;
      this.updateVo();
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
