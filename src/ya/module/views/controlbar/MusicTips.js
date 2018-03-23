import CountTips from "../../../component/CountTips";
import LayerManager from "../../managers/LayerManager";

class MusicTips extends CountTips {
  constructor() {
    super();
    this.append$();
    var dom =
      "<div class='ya-musictips-view'>" +
      "<div class='ya-musictips-container'>" +
      "<div class='ya-musictips-pro'></div>" +
      "<div class='ya-musictips-proev'></div>" +
      "<div class='ya-musictips-bar'><div class='ya-musictips-barbg'><div class='ya-musictips-btn'>a</div></div></div>" +
      "</div></div>";
    this.initHtmlDisplay(dom);

    LayerManager.TipsLayer.append(this);
  }
}
export default MusicTips;
