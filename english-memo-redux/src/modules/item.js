// 모듈이 늘어난다 = 관리할 상태값이 하나 더 늘어난다.
// 관리할 상태값이 하나 더 필요하다 => 모듈을 하나 추가해라
import { Map, List } from "immutable";
import { handleActions, createAction } from "redux-actions";

// 액션 타입 정하기
const ITEM_ADD = "item/ADD";
const ITEM_DELETE = "item/DEL";
const ITEM_COMPLETE = "item/COMPLETE";

// 액션 <--- 해당 액션을 발생시킬 컴포넌트 혹은 UI요소
export const add = createAction(ITEM_ADD);
export const del = createAction(ITEM_DELETE);
export const complete = createAction(ITEM_COMPLETE);
// Map = 딕셔너리
// {'id':1, 'content':'abc', 'complete':true}
// List = 배열, 리스트
// 리듀서 - 액션이 발생하면 어떻게 상태값을 바꿀거야?
const initState = List([]);

export default handleActions(
  {
    [ITEM_ADD]: (state, action) => {
      // state에 새로운 todo item을 추가하자 - action.payload에 들어있는 값을 가지고
      const { id, content, complete } = action.payload;
      return state.push(
        Map({
          id,
          content,
          complete,
        })
      );
    },
    [ITEM_DELETE]: (state, action) => {
      //const id = action.payload;
      const { payload: id } = action;
      // id값을 받아서 -> 해당 id값을 가진 아이템의 인덱스를 찾아서 그 아이템을 지웠다.
      // immutable filter해당하는 애들만 반환한다.
      return state.filter((item) => item.get("id") !== id);
    },
    [ITEM_COMPLETE]: (state, action) => {
      // id값을 받아서 -> 해당 id값을 가진 아이템을 찾아서
      // 그 아이템의 상태값을 바꾼 새 아이템을 만들고
      // 전체 목록에서 해당 아이템만 바꿔치기한 새 목록을 만든다.
      const { payload: id } = action;
      // index찾는다.
      const index = state.findIndex((item) => item.get("id") === id);
      return state.updateIn([index, "complete"], (complete) => !complete);
    },
  },
  initState
);
