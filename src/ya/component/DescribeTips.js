import BaseTips from "./BaseTips";

import "./DescribeTipsCss.css";
import LayerManager from "../module/managers/LayerManager";

class DescribeTips extends BaseTips {
  constructor() {
    super();
    this.initHtmlDisplay('<div class="ya-describe-tips"></div>');
    this._describe = null;
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case DescribeTips.Type_Describe:
        this._describe = vo.value;
        this._updateDescribe();
        break;
    }
  }
  _updateDescribe() {
    this._describe && this.$text(this._describe);
  }
}
DescribeTips.Type_Describe = "Type_Describe";
export default DescribeTips;
