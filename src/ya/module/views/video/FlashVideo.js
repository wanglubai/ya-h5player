import BaseVideo from "./BaseVideo.js";
import EventType from "../../../component/EventType.js";
import LayerManager from "../../managers/LayerManager.js";
class FlashVideo extends BaseVideo {
  constructor() {
    super();
    this.initHtmlDisplay(
      '<embed class="ya-flash-video" quality="higt" bgcolor="#000000" allowscriptaccess="always" allowfullscreen="true" seamlesstabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" src="./Player.swf?call=flashCall&amp;debug=1"></embed>'
    );

    LayerManager.VideoLayer.append(this);

    var tempThis = this;
    window["flashCall"] = function() {
      var arr = [];
      for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
      tempThis.flashCall(arr);
    };
  }

  flashCall(arr) {
    if (arr[0] == "flashInit") {
      this.resReady = true;
    }
  }

  _dealVo_(vo) {
    if (vo.type == "url") {
      this.display[0].flashCall("url", vo.value);
    } else if (vo.type == "play") {
      this.display[0].flashCall("play");
    } else if (vo.type == "pause") {
      this.display[0].flashCall("pause");
    }
  }
}
export default FlashVideo;
