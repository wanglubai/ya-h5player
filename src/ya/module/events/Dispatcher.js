import Base from '../../interface/Base.js';

class Dispatcher extends Base {
  constructor() {
    super();
    this._events = [];
  }
  addEventListener(type, call) {
    if (this._events.hasOwnProperty(type) == false) {
      this._events[type] = [];
    }
    this._events[type].push(call);
  }
  removeEventListener(type, call) {
    if (this._events.hasOwnProperty(type)) {
      var list = this._events[type];
      var index = list.indexOf(call);
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  }
  dispatchEvent(param) {
    var type = "";
    if (typeof param == "string") {
      type = param;
    } else if (typeof param == "object") {
      type = param["type"];
    }
    debugger
    if (this._events.hasOwnProperty(type)) {
      var list = this._events[type];
      debugger
      for (var i in list) {
        list[i](param);
      }
    }
  }
  destroy() {}
}

export default new Dispatcher();