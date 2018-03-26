import CountTips from "../../../component/CountTips";
import LayerManager from "../../managers/LayerManager";
import "./MusicTipsCss.css";
class MusicTips extends CountTips {
  constructor() {
    super();
    var dom =
      "<div id='musicBg'>" +
      "<div id='musicContainer'>" +
      "<div id='musicPro'></div>" +
      "<div id='musicProEv'></div>" +
      "<div id='musicBar'><div id='musicBarBg'><div id='musicBarTips'>a</div></div></div>" +
      "</div></div>";
    this.initHtmlDisplay(dom);

    LayerManager.TipsLayer.append(this);
    this._addEvent_();
  }
  _addEvent_() {
    var tempThis = this;
    // $("#musicBar").on("mousedown", function(ev) {
    //   var disY = ev.clientY;
    //   var val = $("#musicBar").position().top;
    //   $(document).on("mousemove", function(ev1) {
    //     this._setProVal(val + ev1.clientY - disY);
    //     console.log(val + ev1.clientY - disY);
    //   });
    //   $(document).on("mouseup", function() {
    //     $(document).off("mouseup");
    //     $(document).off("mousemove");
    //   });
    //   return false;
    // });
    // $("#musicBar").on("mouseenter", function(ev1) {
    //   $("#musicBarTips").show();
    // });
    // $("#musicBar").on("mouseleave", function(ev1) {
    //   $("#musicBarTips").hide();
    // });
    // $("#musicProEv").on("mousedown", tempThis._setProVal(e));
  }
  _setProVal(e) {
    val = e.offsetY;
    val = Math.max(Math.min(this.max, val), 0);
    $("#musicBar").css("top", val + "px");
    $("#musicPro").css("height", this.max - val + "px");
    $("#musicPro").css("top", val + "px");
  }
  _eventFun(e) {
    switch (e.type) {
      case "mousedown":
        console.log(e);
        break;
    }
  }
}
export default MusicTips;
