import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { children, deleteHandler } = this.props;
    return (
      <div>
        <input type="checkbox" readOnly />
        {children}
        <button onClick={deleteHandler}>delete</button>
      </div>
    );
  }
}

export default TodoItem;
