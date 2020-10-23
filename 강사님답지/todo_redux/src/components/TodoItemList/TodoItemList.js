import React, { Component } from "react";
import TodoItem from "../TodoItem";
// 관례 - 관례는 남의 코드를 잘 이해하려고, 내 코드를 남이 이해하기 쉽게
// 보통은 상태값을 구독하는 대상은 컨테이너
// 상태값을 표현해야되는 대상은 컨테이너 안에 컴포넌트

import { connect } from "react-redux"; // 상태값을 구독하려고

import { bindActionCreators } from "redux"; // 액션을 발생시키려고(상태값을 변경하려고)
import * as itemActions from "../../modules/item"; // 구체적인 액션
import { ItemList, Number, Word, Meaning } from "./TodoItemList.styled";

class TodoItemList extends Component {
  // 핸들러 같은거 만들기
  completeHandler = (id) => {
    const { ItemActions } = this.props;
    ItemActions.complete(id);
  };

  deleteHandler = (id) => {
    const { ItemActions } = this.props;
    ItemActions.del(id);
  };

  render() {
    const { todo_list } = this.props;
    const { completeHandler, deleteHandler } = this;
    const todoItems = todo_list.map((todo_item) => {
      const { id, complete, content, meaning } = todo_item.toJS();
      // const id = todo_item.get('id');
      // const complete = todo_item.get('complete');
      // const content = todo_item.get('content');
      return (
        <TodoItem
          key={id}
          deleteHandler={() => deleteHandler(id)}
          completeHandler={() => completeHandler(id)}
          complete={complete}
        >
          <ItemList>
            <Number>{id + 1}</Number>
            <Word>{content}</Word>
            <Meaning>{meaning}</Meaning>
          </ItemList>
        </TodoItem>
      );
    });
    return <div>{todoItems}</div>;
  }
}

//export default TodoItemList;
export default connect(
  (state) => ({
    todo_list: state.todo_list,
  }),
  (dispatch) => ({
    ItemActions: bindActionCreators(itemActions, dispatch),
  })
)(TodoItemList);
