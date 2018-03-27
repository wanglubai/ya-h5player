import "./MusicTipsCss.css";
import CountTips from "../../../../component/CountTips";
import LayerManager from "../../../managers/LayerManager";
class MusicTips extends CountTips {
  constructor() {
    super();
    var dom =
      "<div class='ya-music-tips'>" +
      "<div class='ya-music-tips-container'>" +
      "<div class='ya-music-tips-probg'></div>" +
      "<div class='ya-music-tips-event'></div>" +
      "<div class='ya-music-tips-btn-container'><div class='ya-music-tips-btn'><div class='ya-music-tips-describe'></div></div></div>" +
      "</div></div>";
    this.initHtmlDisplay(dom);
    this._addEvent_();

    this._startClickY = 0;
    this._startBtnY = 0;
    this._volume = 0;
    this._y = 0;
  }
  init() {
    this._proBgHeight = this.$find(".ya-music-tips-probg").height();
  }
  _addEvent_() {
    super._addEvent_();
    this.$find(".ya-music-tips-event").on("mousedown", e =>
      this._eventFun(e, "hit")
    );
    this.$find(".ya-music-tips-btn-container").on("mousedown", e =>
      this._eventFun(e, "hitStart")
    );
  }
  _eventFun(e, type) {
    switch (type) {
      case "hit":
        this._y = Math.min(Math.max(0, e.offsetY), this._proBgHeight);
        this._volume = 1 - this._y / this._proBgHeight;
        this._updateView();
        this.emit({ type: MusicTips.Value_Change, value: this._volume });
        this.emit({ type: MusicTips.Value_Lazy_Change, value: this._volume });
        break;
      case "hitStart":
        this._startClickY = e.clientY;
        this._startBtnY = parseInt(
          this.$find(".ya-music-tips-btn")
            .css("top")
            .replace(/px/, "")
        );
        this._hitStart();
        return false;
        break;
      case "documentMove":
        this._y = Math.min(
          Math.max(0, this._startBtnY + e.clientY - this._startClickY),
          this._proBgHeight
        );
        this._volume = 1 - this._y / this._proBgHeight;
        this._updateView();
        this.emit({ type: MusicTips.Value_Change, value: this._volume });
        break;
      case "documentUp":
        this._documentOff();
        this.emit({ type: MusicTips.Value_Lazy_Change, value: this._volume });
        break;
    }
  }

  _updateView() {
    this.$find(".ya-music-tips-btn").css("top", this._y);
    this.$find(".ya-music-tips-probg").css(
      "height",
      this._proBgHeight - this._y + "px"
    );
    this.$find(".ya-music-tips-probg").css("top", this._y + "px");
    this.$find(".ya-music-tips-describe").text(this._volume);
  }

  _hitStart() {
    $(document).on("mousemove", e => this._eventFun(e, "documentMove"));
    $(document).on("mouseup", e => this._eventFun(e, "documentUp"));
    return false;
  }

  _documentOff() {
    $(document).off("mousemove");
    $(document).off("mouseup");
  }

  set volume(val) {
    this._volume = val;
    this._y = this._volume / 100 * this._proBgHeight;
  }
}
MusicTips.Value_Change = "MusicTips.Value_Change";
MusicTips.Value_Lazy_Change = "MusicTips.Value_Lazy_Change";
export default MusicTips;
