import EventDispatcher from "./EventDispatcher";

class SelecteGroup extends EventDispatcher {
  constructor() {
    super();
    this._arr = [];
    this._cur = null;
  }
  add() {
    for (var i in arguments) {
      this._arr.push(arguments[i]);
      arguments[i].register(this);
    }
  }
  remove() {
    for (var i in arguments) {
      var index = this._arr.indexOf(arguments[i]);
      if (index > 0) {
        this._arr.splice(index, 1);
        arguments[i].unregister(this);
      }
    }
  }
  setSelectedByIndex(index, emit) {
    var item = this._arr[index];
    item && this.setSelected(item, emit);
  }
  setSelected(I, emit) {
    if (this._cur) {
      if (this._cur == I) {
        return;
      } else {
        this._cur.setSelectedState(0);
      }
    }
    this._cur = I;
    this._cur.setSelectedState(1);
    if (emit) {

    } else {
      this.emit({ type: SelecteGroup.Change, value: this._cur });
    }
  }
}
SelecteGroup.Change = "SelecteGroup.Change";
export default SelecteGroup;
