import Sprite from '../../component/Sprite.js';

class Stage extends Sprite {
  constructor() {
    super();
    this._claseeName = 'Stage';
    this._initDisplay('stage');
  }
}
export default Stage;