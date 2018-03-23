import Base from "./Base.js";
import { debug } from "util";
import Debug from "./Debug.js";

class EventDispatcher extends Base {
  constructor() {
    super();
    this._listeners = {};
  }
  on(type, listener) {
    if (this._listeners[type]) {
      if (this._listeners[type].indexOf(listener) == -1)
        this._listeners[type].push(listener);
    } else {
      this._listeners[type] = [listener];
    }
  }
  ons() {
    var len = arguments.length - 1;
    for (var i = 0; i < len; i++) {
      this.on(arguments[i], arguments[len]);
    }
  }
  removeListener(type, listener) {
    var arr = this._listeners[type];
    if (!arr) return;
    var index = arr.indexOf(listener);
    if (index != -1) {
      arr.splice(index, 1);
      if (arr.length == 0) {
        delete this._listeners[type];
      }
    }
  }
  emit(eventObj) {
    var type = null;
    var vo = {};
    if (typeof eventObj == "string") {
      type = eventObj;
      vo["type"] = type;
    } else {
      type = eventObj["type"];
      vo = eventObj;
    }
    if (!type) return;
    var arr = this._listeners[type];
    if (arr) {
      for (var i in arr) {
        arr[i](vo);
      }
    }
  }

  destroy() {
    super.destroy();
  }
}

export default EventDispatcher;
