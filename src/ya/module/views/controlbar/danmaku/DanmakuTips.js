import LayerManager from "../../../managers/LayerManager";

import CountTips from "../../../../component/CountTips";
import "./DanmakuTipsCss.css";
class DanmakuTips extends CountTips {
  constructor() {
    super();
    var dom =
      "<div class='bulletView'>" +
      "<div id='bulletTypeContainer'>" +
      "<div class='bulletTitle'>位置</div>" +
      "<div id='bulletType_0' class='bulletCheckBox bulletTypeTitle_0'>全屏</div>" +
      "<div id='bulletType_1' class='bulletCheckBox1 bulletTypeTitle_1'>半屏</div>" +
      "<div id='bulletType_2' class='bulletCheckBox bulletTypeTitle_2'>顶部</div>" +
      "</div>" +
      "<div id='bulletDensityContainer'>" +
      "<div class='bulletTitle'>密度</div>" +
      "<div id='bulletDensity_0' class='bulletCheckBox bulletDensityTitle_0'>不限</div>" +
      "<div id='bulletDensity_1' class='bulletCheckBox1 bulletDensityTitle_1'>海量</div>" +
      "<div id='bulletDensity_2' class='bulletCheckBox bulletDensityTitle_2'>一般</div>" +
      "</div>" +
      "<div id='bulletAlphaTitle'><h5 id='bulletAlphaTitleH'>弹幕透明度</h5></div>" +
      "<div id='bulletAlphaContainer'><div id='bulletAlphaBg'>" +
      "<div id='bulletAlphaPro'></div>" +
      "<div id='bulletAlphaProEvt'></div>" +
      "<div id='bulletAlphaBar'></div>" +
      "</div>" +
      "</div>" +
      "</div>";
    this.initHtmlDisplay(dom);
    LayerManager.TipsLayer.append(this);
    this._addEvent_();
  }
}
export default DanmakuTips;
