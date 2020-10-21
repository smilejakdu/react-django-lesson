import React, { Component } from "react";
import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const { children, deleteHandler, completeHandler, complete } = this.props;
    return (
      <div onClick={completeHandler} className={`${cx({ complete })} test`}>
        <input type="checkbox" readOnly />
        {children}
        <button onClick={deleteHandler}>delete</button>
      </div>
    );
  }
}

export default TodoItem;
