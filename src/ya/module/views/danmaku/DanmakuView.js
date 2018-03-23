import YaDanmakuBase from "./YaDanmakuBase";
import YaFactory from "./YaFactory";
import Sprite from "../../../component/Sprite";
import LayerManager from "../../managers/LayerManager";

class DanmakuView extends Sprite {
  constructor() {
    super();
    this._isInit = false;
    this._lineHeight = 40;
    this._voList = [];
    this._itemList = [];
    this._layerMax = 1;
    this._startIndex = 0;
    this._endIndex = 0;
    this._maxNum = -1;
    this._startRatio = 0;
    this._endRatio = 1;
    this._setInterval = -1;

    this.initDivDisplay("YaDanmaku");
    LayerManager.DanmakuLayer.append(this);
  }

  _dealVo_() {
    
  }

  init(vo) {
    this._vo = vo;
    this._lineHeight = vo["line_height"] ? vo["line_height"] : 40;
    this._layerIndex = vo["max_layer"] ? Math.max(0, vo["max_layer"] - 1) : 0;
    this._maxNum = vo["max_num"] ? vo["max_num"] : -1;
    this._isInit = true;

    setInterval(function() {
      this.update();
    }, 1000 / 24);
  }

  play(vo) {
    if (this._maxNum == -1 || this._voList.length < this._maxNum) {
      this._voList.push(vo);
    }
  }

  destory() {
    clearInterval(this._setInterval);
  }

  setRatio(start, end) {
    this._startRatio = start;
    this._endRatio = end;
  }

  update() {
    if (this._isInit == false) return;
    if (this._voList.length == 0) return;
    var max = parseInt(this._display.height() / this._lineHeight - 1);
    this._startIndex = parseInt(max * this._startRatio);
    this._endIndex = parseInt(max * this._endRatio);
    this.updateLayer(0);
  }

  updateLayer(index) {
    if (this._voList.length == 0) return;
    if (index > this._layerIndex) return;
    var curItem;
    var item;
    var vo;
    if (this._itemList[index] == undefined) {
      this._itemList[index] = [];
    }
    var itemArr = this._itemList[index];
    var nextLayer = true;
    for (var i = this._startIndex; i < this._endIndex; i++) {
      if (this._voList.length == 0) return;
      if (itemArr[i] == null) {
        vo = this._voList.shift();
        vo["parent"] = this._display;
        vo["top"] = this._lineHeight * i + 2;
        item = YaFactory.create();
        item.play(vo);
        itemArr[i] = item;
        nextLayer = false;
      } else {
        curItem = itemArr[i];
        if (curItem.canPush()) {
          vo = this._voList.shift();
          vo["parent"] = this._display;
          vo["top"] = this._lineHeight * i + 2;
          vo["speed"] = curItem.getSpeed();
          item = YaFactory.create();
          item.play(vo);
          itemArr[i] = item;
          nextLayer = false;
        }
      }
    }
    if (nextLayer && index < this._layerIndex) {
      this.updateLayer(index + 1);
    }
  }
}

export default DanmakuView;
