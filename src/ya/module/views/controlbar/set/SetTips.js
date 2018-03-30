import CountTips from "../../../../component/CountTips";
import "./SetTipsCss.css";
class SetTips extends CountTips {
  constructor() {
    super();
    var dom =
      "<div class='ya-set-tips'>" +
      "<div class='ya-set-continer1'><div class='ya-set-title1'>屏蔽特效</div><div class='ya-set-full'>全屏</div><div class='ya-set-car'>座驾</div></div>" +
      "<div class='ya-set-line'></div>" +
      "<div class='ya-set-continer2'><div class='ya-set-title3'>弹幕位置</div><div class='ya-set-location0'></div><div class='ya-set-location1'></div><div class='ya-set-location2'></div></div>" +
      "<div class='ya-set-continer3'><div class='ya-set-title3'>弹幕密度</div><div class='ya-set-density ya-set-density0'>不限</div><div class='ya-set-density ya-set-density1'>海量</div><div class='ya-set-density ya-set-density2'>一般</div></div>" +
      "<div class='ya-set-continer4'><div class='ya-set-title4'>透明度</div><div class='ya-set-alpha ya-set-alpha0'>无</div><div class='ya-set-alpha ya-set-alpha1'>低</div><div class='ya-set-alpha ya-set-alpha2'>中</div><div class='ya-set-alpha ya-set-alpha3'>高</div></div>" +
      "</div>";
    this.initHtmlDisplay(dom);
    this._addEvent_();
  }
  _addEvent_() {
    super._addEvent_();
    this.$find(".ya-set-full").on("click", e => this._clickFullCall(e));
    this.$find(".ya-set-car").on("click", e => this._clickCarCall(e));
    for (let i = 0; i < 3; i++) {
      this.$find(".ya-set-density" + i).on("click", e =>
        this._clickDensityCall(i)
      );
    }
    for (let i = 0; i < 4; i++) {
      this.$find(".ya-set-alpha" + i).on("click", e => this._clickAlphaCall(i));
    }
  }
  _dealVo_(vo) {
    switch (vo.type) {
      case "init":
        this.setAlpha(vo.alpha);
        this.setDensity(vo.density);
        this.setCarStatus(vo.car);
        this.setAnimationStatus(vo.animation);
        break;
    }
  }
  _clickFullCall() {
    if (this.$find(".ya-set-full").hasClass("ya-set-common-activate")) {
      this.setAnimationStatus(0);
      this.emit({ type: SetTips.ChangeAnimation, value: 0 });
    } else {
      this.setAnimationStatus(1);
      this.emit({ type: SetTips.ChangeAnimation, value: 1 });
    }
  }
  _clickCarCall() {
    if (this.$find(".ya-set-car").hasClass("ya-set-common-activate")) {
      this.setCarStatus(0);
      this.emit({ type: SetTips.ChangeCar, value: 0 });
    } else {
      this.setCarStatus(1);
      this.emit({ type: SetTips.ChangeCar, value: 1 });
    }
  }
  _clickDensityCall(index) {
    if (
      !this.$find(".ya-set-density" + index).hasClass("ya-set-common-activate")
    ) {
      this.setDensity(index);
      this.emit({ type: SetTips.ChangeDensity, value: index });
    }
  }
  _clickAlphaCall(index) {
    if (
      !this.$find(".ya-set-alpha" + index).hasClass("ya-set-common-activate")
    ) {
      this.setAlpha(index);
      this.emit({ type: SetTips.ChangeAlpha, value: index });
    }
  }
  setAnimationStatus(val) {
    if (val == 0) {
      this.$find(".ya-set-full").removeClass("ya-set-common-activate");
    } else {
      this.$find(".ya-set-full").addClass("ya-set-common-activate");
    }
  }
  setCarStatus(val) {
    if (val == 0) {
      this.$find(".ya-set-car").removeClass("ya-set-common-activate");
    } else {
      this.$find(".ya-set-car").addClass("ya-set-common-activate");
    }
  }
  setDensity(index) {
    this.$find(".ya-set-density").removeClass("ya-set-common-activate");
    this.$find(".ya-set-density" + index).addClass("ya-set-common-activate");
  }
  setAlpha(index) {
    this.$find(".ya-set-alpha").removeClass("ya-set-common-activate");
    this.$find(".ya-set-alpha" + index).addClass("ya-set-common-activate");
  }
}

SetTips.ChangeDensity = "SetTips.ChangeDensity";
SetTips.ChangeAlpha = "SetTips.ChangeAlpha";
SetTips.ChangeAnimation = "SetTips.ChangeAnimation";
SetTips.ChangeCar = "SetTips.ChangeCar";
export default SetTips;
