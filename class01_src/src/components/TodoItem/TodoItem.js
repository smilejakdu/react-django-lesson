import React, { Component } from "react";
import styles from "./TodoItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const { children, deleteHandler, completeHandler, complete } = this.props;
    return (
      <div onClick={completeHandler} className={`${cx({ complete })}`}>
        <input type="checkbox" readOnly />
        {children}
        <button
          onClick={(e) => {
            deleteHandler();
            e.stopPropagation();
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
