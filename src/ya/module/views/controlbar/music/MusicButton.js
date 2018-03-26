import ControlbarButton from "../ControlbarButton";
import MusicTips from "./MusicTips";

class MusicButton extends ControlbarButton {
    constructor() {
        super();
    }
    _init() {
        this._tips = new MusicTips();
    }
}
export default MusicButton;