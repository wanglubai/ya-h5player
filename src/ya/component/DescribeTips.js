import BaseTips from "./BaseTips";

import "./DispatcherCss.css";
import LayerManager from "../module/managers/LayerManager";

class DescribeTips extends BaseTips {
  constructor() {
    super();
    this.initDivDisplay("describe-tips");
    this._describe = null;
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "yparent":
        this._yparent = vo.value;
        break;
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
