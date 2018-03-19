import YaFactory from "./YaFactory";
import Sprite from "../../../component/Sprite";

class YaDanmakuBase extends Sprite {
  constructor(vo) {
    this._isDestroy = false;
    this._canPush = false;
    this._isInit = false;
    this.initHtmlDisplay("<div></div>");
  }

  play(vo) {
    this._isDestroy = false;
    this._canPush = false;
    this._isInit = false;

    this._vo = vo;
    this._speed = vo["speed"] ? vo["speed"] : 2 * Math.random() + 2.5;
    this._parent = vo["parent"];

    this._display[0].className = "YaDanmakuBase";
    this._display[0].style = "";

    vo["class"] && this._display.addClass(vo["class"]);
    vo["style"] && this._display.css(vo["style"]);
    this._parent.append(this._display);
    this._display.append(vo["msg"]);

    this._display.css("position", "absolute");
    this._display.css("top", vo["top"] + "px");

    this._display.css("transform", "translateX(" + this._parent.width() + "px");

    var time = parseInt(
      (this._parent.width() + this._display.width()) / this._speed / 24
    );
    this._display.css("transition", "transform " + time + "s linear");
    this._display.one("transitionend", this.destroy);
    setTimeout(function() {
      this._isInit = true;
      this._display.css(
        "transform",
        "translateX(" + -this._display.width() + "px)"
      );
    }, 1);
  }
  destroy() {
    this._isDestroy = true;
    this._display.empty();
    this._display.removeAttr("class");
    this._display[0].style = "";
    YaFactory.recycle(this);
  }
  getSpeed() {
    return this._speed;
  }
  canPush() {
    if (this._isInit == false) {
      return false;
    }
    if (this._canPush || this._isDestroy) {
      return true;
    }
    if (
      this._display.position().left <
      this._parent.width() - this._display.width() - 20
    ) {
      return true;
    }
    return false;
  }
}

export default YaDanmakuBase;
