import CountTips from "../../../../component/CountTips";
import SharpnessItem from "./SharpnessItem";
import SelecteGroup from "../../../../component/SelecteGroup";
import './SharpnessTipsCss.css';
class SharpnessTips extends CountTips {
  constructor() {
    super();
    this.initDivDisplay("sharpness-tips");
    this._group = null;
    this._addEvent_();
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "sharpnessVos":
        this.updateViewByVos(vo.value);
        break;
    }
  }
  updateViewByVos(vos) {
    this._group = new SelecteGroup();
    var item;
    for (var i in vos) {
      item = new SharpnessItem();
      this.append(item);
      this._group.add(item);
      item.setVo({ type: "init", value: vos[i] });
    }
  }
  updateIndex(index) {
    this._group.setSelectedByIndex(index);
  }
  setSelectedIndex(value) {
    this._group.setSelectedByIndex(value);
  }
}
export default SharpnessTips;
