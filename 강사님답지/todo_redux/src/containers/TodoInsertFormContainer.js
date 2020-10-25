import React, { Component } from "react";
import TodoInsertForm from "../components/TodoInsertForm";

// 연결하기 위한
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//
import * as formActions from "../modules/form";
import * as itemActions from "../modules/item";

// TodoInsertForm 컴포넌트에게 상태값을 전달해줄 컨테이너
class TodoInsertFormContainer extends Component {
  id = 0; // 글번호, 키값 시작 번호 1
  // 직접 코딩할 때는 index번호 0
  getItemId = () => {
    return this.id++;
  };

  changeHandler = (e) => {
    const { value } = e.target;
    const { FormActions } = this.props;
    FormActions.formChange(value);
  };

  meaningchangeHandler = (e) => {
    const { value } = e.target;
    const { FormActions } = this.props;
    FormActions.meaningChange(value);
  };

  insertHandler = (e) => {
    // 액션 전달, 값
    const { value, meaning, FormActions, ItemActions } = this.props;
    // 새로 추가하기

    if (value.length === 0 || meaning.length === 0) {
      alert("값추가하셈");
    } else {
      const new_item = {
        content: value,
        meaning: meaning,
        complete: false,
        id: this.getItemId(),
      };
      ItemActions.add(new_item);
      // form 비워주기 <--- 방명록 입력창, 댓글 입력창
      FormActions.formChange("");
      FormActions.meaningChange("");
    }
  };

  render() {
    const { value, meaning } = this.props;
    const { changeHandler, insertHandler, meaningchangeHandler } = this;
    return (
      <TodoInsertForm
        word={value}
        meaning={meaning}
        wordonChange={changeHandler}
        meaningchangeHandler={meaningchangeHandler}
        insertHandler={insertHandler}
      />
    );
  }
}

// 컨테이너에게 액션을 연결을 한다.
// 나는 어떤 상태값을 사용하고 있어
// 나는 어떤 액션이 일어나는 것에 관심이 있어(구독)
// 1. 나는 어떤 상태값을 변경하고 싶은거냐?

// value값을 상태값으로 취급하고 싶다.
// 액션타입, 액션, 리듀서, 구독하고 있는 컨테이너가, 변경을 발생시킬 컨터이너

// 투두 리스트
// 투루 리스트를 상태값으로 취급하고 싶다.
// 새로 추가, complete로 변경, remove삭제

export default connect(
  (state) => ({
    value: state.form.get("value"),
    meaning: state.form.get("meaning"),
  }),
  (dispatch) => ({
    FormActions: bindActionCreators(formActions, dispatch),
    ItemActions: bindActionCreators(itemActions, dispatch),
  })
)(TodoInsertFormContainer);
