import Sprite from "./Sprite";

class BaseTips extends Sprite {
  constructor() {
    super();
    this.top = null;
  }
  _addEvent_() {
    this.$on("mouseover", this.show.bind(this));
    this.$on("mouseout", this.hide.bind(this));
  }
  setShowPosition(x, y, type) {
    this.show();
    if (!type || type == "center") {
      this.css("left", x - this.cacheWidth / 2);
      this.css("top", y - this.cacheHeight);
    }
  }
  init() {}
}

export default BaseTips;
