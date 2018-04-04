import BaseManager from "./BaseManager";
import $ from "webpack-zepto";
class HttpManager extends BaseManager {
  constructor() {}
  static toServerGetPlayerVoByRoomId(id,sCall,eCall) {
    HttpManager.ajax(
    );
  }
  static ajax(url, successCall, erro) {
    $.ajax({
      url: url,
      dataType: "jsonp",
      cache: true,
      jsonpCallback: "success_jsonpCallback",
      success: function(data) {
        successCall(data);
      }
    });
  }
}
export default HttpManager;
