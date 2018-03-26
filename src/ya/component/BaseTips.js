import Sprite from "./Sprite";

class BaseTips extends Sprite {
  constructor() {
    super();
    this.top = null;
  }
  _addEvent_() {
    this.$on("mouseenter", this.show.bind(this));
    this.$on("mouseleave", this.hide.bind(this));
  }
  setShowPosition(x, y, type) {
    if (!type || type == "center") {
      this.css("left", x - this.cacheWidth / 2);
      this.css("top", y - this.cacheHeight);
    }
    this.show();
  }
  init() {}
}

export default BaseTips;
