import BaseVideo from "./BaseVideo.js";
import EventType from "../../../component/EventType.js";
import LayerManager from "../../managers/LayerManager.js";
class FlashVideo extends BaseVideo {
  constructor() {
    super();
    this.yid = "FlashVideo";
    this.initHtmlDisplay(
      '<embed class="ya-flash-video" quality="higt" bgcolor="#000000" allowscriptaccess="always" allowfullscreen="true" seamlesstabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" src="./Player.swf?call=flashVideoCall&amp;debug=1"></embed>'
    );

    LayerManager.VideoLayer.append(this);

    var tempThis = this;
    window["flashVideoCall"] = function () {
      var arr = [];
      for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
      tempThis.flashVideoCall(arr);
    };
  }

  flashVideoCall(arr) {
    if (arr[0] == "flashInit") {
      this.resReady = true;
    } else if (arr[0] == "playState") {
      this.emit(BaseVideo.VideoPlayState);
    }
  }

  _dealVo_(vo) {
    if (this.destorystatus) return;
    if (vo.type == "url") {
      this.display[0].flashVideoCall("url", vo.value);
    } else if (vo.type == "play") {
      this.display[0].flashVideoCall("play");
    } else if (vo.type == "pause") {
      this.display[0].flashVideoCall("pause");
    } else if (vo.type == "volume") {
      this.display[0].flashVideoCall(
        "volume",
        Math.min(1, Math.max(0, vo.value / 100))
      );
    } else if (vo.type == 'sharpness') {
      this._playVo(vo.value);
    }
  }
  _playVo(vo) {
    this.display[0].flashVideoCall("url", vo.url);
  }

  destory() {
    super.destory();
  }

  _removeEvent_() { }
}
export default FlashVideo;
