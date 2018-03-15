import BaseVideo from "./BaseVideo.js";
class FlashVideo extends BaseVideo {
  constructor() {
    super();
    this._initDisplay("flash-video", "embed");
    this._attr("quality", "higt");
    this._attr("bgcolor", "#000000");
    this._attr("allowscriptaccess", "always");
    this._attr("allowfullscreen", "true");
    this._attr("seamlesstabbing", "false");
    this._attr("type", "application/x-shockwave-flash");
    this._attr("pluginspage", "http://www.macromedia.com/go/getflashplayer");
    this._attr("wmode", "transparent");
    this._attr("src", "./Player.swf?call=flashCall&debug=1");

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
      this.display[0].flashCall(
        "url",
        "http://180.153.100.182/flvtx.plu.cn/onlive/ffe20d67d3684b678054b1e48cf6739c.flv?txSecret=626678fa70d7721e26eaa0d2277a22f3&txTime=5aaa77e3&dispatch_from=ztc10.236.21.177&utime=1521120678483"
      );
    }
  }
  url(url) {
    this.display._attr("src", url);
  }
}
export default FlashVideo;
