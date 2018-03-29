import ControlbarButton from "../ControlbarButton";
import "./MusicButtonCss.css";
import MusicTips from "./MusicTips";
class MusicButton extends ControlbarButton {
  constructor(container) {
    super();
    this._id_ = "ya-music-btn";
    this.initHtmlDisplay('<a class="' + this._id_ + '"></a>');
    this._tips_ = new MusicTips();
    this._volume = 0;
    this._cacheVolume = 20;
    container.append(this, this._tips_);
    this._addEvent_();
  }
  _addEvent_() {
    super._addEvent_();
    if (this._tips_) {
      this._tips_.on(MusicTips.Value_Change, this._tipsEventFun.bind(this));
    }
  }
  _tipsEventFun(e) {
    if (e.value == 0) {
      var _status = 1;
    } else {
      var _status = 0;
    }
    if (this._status_ != _status) {
      this._status_ = _status;
      this._updateView();
    }
    this._volumeEmit(e.value);
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._status_ = vo.value["default"] == 0 ? 1 : 0;
        this._tips_.setVo({ type: "init", value: vo.value["default"] });
        this._volume = vo.value["default"];
        this._updateView();
        break;
    }
  }
  _updateView() {
    this._updateState_();
  }
  _clickCall_() {
    if (this._status_ == 0) {
      this._tips_.setVo({ type: "change", value: this._cacheVolume });
      this._volumeEmit(this._cacheVolume);
    } else {
      this._cacheVolume = this._volume;
      this._tips_.setVo({ type: "change", value: 0 });
      this._volumeEmit(0);
    }
  }

  _volumeEmit(val) {
    this._volume = val;
    this.emit({ type: MusicButton.Change, value: this._volume });
  }
}
MusicButton.Change = "MusicButton.Change";
export default MusicButton;
