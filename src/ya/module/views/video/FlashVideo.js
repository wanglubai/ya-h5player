import BaseVideo from "./BaseVideo.js";
import EventType from "../../../component/EventType.js";
import LayerManager from "../../managers/LayerManager.js";
class FlashVideo extends BaseVideo {
  constructor() {
    super();
    this._initDisplay("embed", "flash-video");
    this._attr("quality", "higt");
    this._attr("bgcolor", "#000000");
    this._attr("allowscriptaccess", "always");
    this._attr("allowfullscreen", "true");
    this._attr("seamlesstabbing", "false");
    this._attr("type", "application/x-shockwave-flash");
    this._attr("pluginspage", "http://www.macromedia.com/go/getflashplayer");
    this._attr("wmode", "transparent");
    this._attr("src", "./Player.swf?call=flashCall&debug=1");
    LayerManager.VideoLayer.append(this);

    var tempThis = this;
    window["flashCall"] = function () {
      var arr = [];
      for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
      }
      tempThis.flashCall(arr);
    };
  }
  flashCall(arr) {
    if (arr[0] == "flashInit") {
      this.resReady=true;
    }
  }
  _dealVo(vo) {
    if (vo.type == 'url') {
      this.display[0].flashCall("url", vo.value);
    }
  }
}
export default FlashVideo;
