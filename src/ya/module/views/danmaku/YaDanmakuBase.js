import Sprite from '../../../component/Sprite';
import './YaDanmakuBaseCss.css'
class YaDanmakuBase extends Sprite {
  constructor() {
    super();
    this.initDivDisplay('danmaku-base');
    this._isInit = true;
    this._canPush = false;
    this._isDestroy = false;
    this._parent = null;
    this._danmakuVo = null;
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case 'init':
        this._danmakuVo = vo.value;
        this._initView();
        break;
    }
  }
  destory() {
    super.destory();
    this._isDestroy = true;
    this.display.remove();
  }
  _initView() {
    if (this._danmakuVo['style']) {
      this.css(this._danmakuVo['style']);
    }
    if (this._danmakuVo['class']) {
      this.addClass(this._danmakuVo['class']);
    }
    if (this._danmakuVo['child']) {
      this.$append(this._danmakuVo['child']);
    }
    if (this._danmakuVo['container']) {
      this._danmakuVo['container'].append(this);
    }
    if (this._danmakuVo['top']) {
      this.css('top', this._danmakuVo['top'])
    }
    this.css('transform', "translateX(" + this._danmakuVo['container'].width + "px");
    var time = parseInt((this._danmakuVo['container'].width + this.cacheWidth) / this._danmakuVo.speed / 24);
    this.css('transition', "transform " + time + "s linear");
    this.display.one('transitionend', this.destory.bind(this));
    setTimeout(this.action.bind(this), 1);
  }
  action() {
    this._isInit = true;

    this.css('transform', 'translateX(' + -this.cacheWidth + 'px)');
  }
  get canPush() {
    if (this._isInit == false) {
      return false;
    }
    if (this._canPush || this._isDestroy) {
      return true;
    }
    if (this.$position().left < this._danmakuVo['container'].width - this.cacheWidth - 20) {
      return true;
    }
    return false;
  }
  get speed() {
    return this._danmakuVo['speed'];
  }
}
export default YaDanmakuBase;
