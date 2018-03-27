import CountTips from "../../../../component/CountTips";
import SharpnessItem from "./SharpnessItem";
import SelecteGroup from "../../../../component/SelecteGroup";

class SharpnessTips extends CountTips {
  constructor() {
    super();
    this.initDivDisplay("sharpness-tips");
    this._group = null;
    this._vos = null;
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this._vos = vo.value;
        this._init();
        break;
    }
  }
  _init() {
    this._group = new SelecteGroup();
    var item;
    for (var i in this._vos) {
      item = new SharpnessItem();
      item.setVo({ type: "init", value: this._vos[i] });
      this._group.add(item);
    }
  }
  setSelectedIndex(value) {
    this._group.setSelectedByIndex(value);
  }
}
export default SharpnessTips;
