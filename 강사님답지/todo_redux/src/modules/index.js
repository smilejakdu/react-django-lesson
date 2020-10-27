// modules/index.js 모든 리듀서들을 하나로 합쳐서 사용하려고
// 하나의 스토어에 연결해두려고
import { combineReducers } from "redux";
import form from "./form"; // form.js 파일 내에 default handleActions 가 딸려왔다고 생각하면 된다.
import todo_list from "./item";

export default combineReducers({
  form,
  todo_list,
});
