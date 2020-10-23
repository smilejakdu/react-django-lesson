import React, { Component } from "react";
import { ListBorder, DeleteBtn } from "./TodoItem.styled";

// html : 컨텐츠와 구조 (jsx)
// js : 상태값 변경, ui갱신
// css : 글씨 색상, 크기, 테두리 굵기,
// cx({ complete })
// cx({ 'complete':complete })

class TodoItem extends Component {
  render() {
    const { children, deleteHandler, completeHandler, complete } = this.props;
    return (
      <ListBorder>
        {/* <input
          type="checkbox"
          readOnly
          onClick={completeHandler}
          className={`${cx({ complete })} test`}
        /> */}
        <div>{children}</div>
        <div>
          <DeleteBtn onClick={deleteHandler} className="delete_btn">
            delete
          </DeleteBtn>
        </div>
      </ListBorder>
    );
  }
}

export default TodoItem;
