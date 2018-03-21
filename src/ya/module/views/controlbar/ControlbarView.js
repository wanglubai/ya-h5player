import Sprite from "../../../component/Sprite";

import "./ControlbarView.css";
import LayerManager from "../../managers/LayerManager";
import Button from "../../../component/Button";

class ControlbarView extends Sprite {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-controlbar-view"></div>');
    LayerManager.BarLayer.append(this);
  }
  _dealVo_(vo) {
    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-play-btn" });
    this.append(button);

    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-music-btn" });
    this.append(button);

    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-bullet-btn" });
    this.append(button);

    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-sharpness-btn" });
    this.append(button);

    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-animation-btn" });
    this.append(button);

    var button = new Button();
    button.setVo({ type: "classname", classname: "ya-rotate-btn" });
    this.append(button);
  }
}
export default ControlbarView;
