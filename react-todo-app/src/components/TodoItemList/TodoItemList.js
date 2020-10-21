import React, { Component } from "react";
import TodoItem from "../TodoItem";

class TodoItemList extends Component {
  render() {
    const { todo_list, deleteHandler, completeHandler } = this.props;
    const todoItems = todo_list.map((todo_item) => {
      const { id, complete, content } = todo_item;
      return (
        <TodoItem
          deleteHandler={() => deleteHandler(id)}
          completeHandler={() => completeHandler(id)}
          complete={complete}
        >
          {content}
        </TodoItem>
      );
    });

    return <div>{todoItems}</div>;
  }
}

export default TodoItemList;
