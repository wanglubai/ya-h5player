import Sprite from '../../component/Sprite';
import Button from '../../component/Button';
class Controlbar extends Sprite {
  constructor() {
    super();
    this._initDisplay('controlbar');
    this._initButton();
  }
  _initButton() {
    var playBtn = new Button('play');
    this.append(playBtn);
  }
}
export default Controlbar;