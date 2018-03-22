import BaseVideo from "./BaseVideo.js";
import EventType from "../../../component/EventType.js";
import LayerManager from "../../managers/LayerManager.js";
import VideoEvent from "./VideoEvent.js";
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
    } else if (arr[0] == "playState") {
      this.emit(VideoEvent.VideoPlayState);
    }
  }

  _dealVo_(vo) {
    if(this.destorystatus)return;
    if (vo.type == "url") {
      this.display[0].flashCall("url", vo.value);
    } else if (vo.type == "play") {
      this.display[0].flashCall("play");
    } else if (vo.type == "pause") {
      this.display[0].flashCall("pause");
    } else if (vo.type == "volume") {
      this.display[0].flashCall("volume", vo.value);
    }
  }

  destory(){
    super();
  }

  _removeEvent_(){
  }
}
export default FlashVideo;
