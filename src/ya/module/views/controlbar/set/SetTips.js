import CountTips from "../../../../component/CountTips";
import "./SetTipsCss.css";
class SetTips extends CountTips {
  constructor() {
    super();
    var dom =
      "<div class='ya-set-tips'>" +
      "<div class='ya-set-continer1'><div class='ya-set-title1'>屏蔽特效</div><div class='ya-set-full'>全屏</div><div class='ya-set-car'>座驾</div></div>" +
      "<div class='ya-set-line'></div>" +
      "<div class='ya-set-continer2'><div class='ya-set-title3'>弹幕位置</div><div class='ya-set-location0'></div><div class='ya-set-location1'></div><div class='ya-set-location2'></div></div>" +
      "<div class='ya-set-continer3'><div class='ya-set-title3'>弹幕密度</div><div class='ya-set-density0'>不限</div><div class='ya-set-density1'>海量</div><div class='ya-set-density2'>一般</div></div>" +
      "<div class='ya-set-continer4'><div class='ya-set-title4'>透明度</div><div class='ya-set-alpha0'>无</div><div class='ya-set-alpha1'>低</div><div class='ya-set-alpha2'>中</div><div class='ya-set-alpha2'>高</div></div>" +
      "</div>";
    this.initHtmlDisplay(dom);
    this._addEvent_();
  }
}
export default SetTips;
