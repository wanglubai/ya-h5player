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
    this._group.ons(SelecteGroup.Change, this._eventFun.bind(this));
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
  _eventFun(e) {
    switch (e.type) {
      case SelecteGroup.Change:
        this._tipsChange(e.value.vo);
        break;
    }
  }
  _tipsChange(vo) {
    this.emit({ 'type': SharpnessTips.Change, 'value':vo});
  }
}
SharpnessTips.Change = 'SharpnessTips.Change';
export default SharpnessTips;
