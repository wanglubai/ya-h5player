import YaDanmakuBase from "./YaDanmakuBase";
import Sprite from "../../../component/Sprite";
import LayerManager from "../../managers/LayerManager";
import ConfigModel from "../../models/ConfigModel";
import "./DanmakuViewCss.css";
class DanmakuView extends Sprite {
  constructor() {
    super();
    this._isInit = false;
    this._lineHeight = 40;
    this._voList = [];
    this._itemList = [];
    this._layerMax = 6;
    this._startIndex = 0;
    this._endIndex = 0;
    this._maxNum = -1;
    this._startRatio = 0;
    this._endRatio = 1;
    this._setInterval = -1;
    this._model = ConfigModel;

    this.initDivDisplay("danmaku-view");
    LayerManager.DanmakuLayer.append(this);
  }

  _dealVo_(vo) {
    switch (vo.type) {
      case 'init':
        this._isInit = true;
        this._init();
        break;
      case 'add':
        this._add(vo.value);
        break;
    }
  }

  _init(vo) {
    setInterval(this.update.bind(this), 1000 / 24);
  }

  _add(vo) {
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
    var max = parseInt(this.display.height() / this._lineHeight);
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
        vo["container"] = this;
        vo["top"] = this._lineHeight * i + 2;
        vo["speed"] = 4 + Math.random() * 3;
        item = new YaDanmakuBase();
        item.setVo({ 'type': 'init', value: vo });
        itemArr[i] = item;
        nextLayer = false;
      } else {
        curItem = itemArr[i];
        if (curItem.canPush) {
          vo = this._voList.shift();
          vo["container"] = this;
          vo["top"] = this._lineHeight * i + 2;
          vo["speed"] = curItem.speed;
          item = new YaDanmakuBase();
          item.setVo({ 'type': 'init', value: vo });
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
