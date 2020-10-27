// 액션 타입, 액션, 리듀서 - ducks
import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

// 액션 타입 만들기
// 모듈명 / 액션명
const FORM_CHANGE = "form/FORM_CHANGE";
const MEANING_CHANGE = "form/MEANING_CHANGE";
// signup/FORM_CHANGE - namespace

// 액션 만들기
export const formChange = createAction(FORM_CHANGE);
export const meaningChange = createAction(MEANING_CHANGE);

// 기본값 - 해당 액션과 리듀서가 관계를 맺을 상태값
const initState = Map({
  value: "",
  meaning: "",
});

// html에서 form input type='text' 데 입력한 값 value property

// 리듀서 만들기 - 리듀서를 불러다 쓰기 편하게 store라는 곳에 하나로 합칠
export default handleActions(
  {
    [FORM_CHANGE]: (state, action) => {
      // 해당 액션이 발생하면 어떤 상태값을 어떻게할꺼야?
      console.log("value :", action.payload);
      console.log("value state :", state);
      return state.set("value", action.payload);
    },
    [MEANING_CHANGE]: (state, action) => {
      console.log("meaning : ", action.payload);
      console.log("value state :", state);
      return state.set("meaning", action.payload);
    },
  },
  initState
);
