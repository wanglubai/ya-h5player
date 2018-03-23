import Sprite from "./Sprite";

class BaseTips extends Sprite {
  constructor() {
    super();
  }
  _addEvent_() {
    this.on("mouseenter", this.show.bind(this));
    this.on("mouseleave", this.hide.bind(this));
  }
}
export default BaseTips;
