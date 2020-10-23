import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./TodoInsertForm.scss";
// 할일을 등록할 수 있는 form

class TodoInsertForm extends Component {
  render() {
    const {
      wordonChange,
      word,
      meaning,
      insertHandler,
      meaningchangeHandler,
    } = this.props;
    return (
      <center>
        <div className="board_box">
          <div>
            <TextareaAutosize
              type="text"
              onChange={wordonChange}
              placeholder="word"
              value={word}
              className="board_word"
            />
          </div>
          <div>
            <TextareaAutosize
              type="text"
              onChange={meaningchangeHandler}
              placeholder="meaning"
              value={meaning}
              className="board_meaning"
            />
          </div>
          <button onClick={insertHandler} className="board_btn">
            입력
          </button>
        </div>
      </center>
    );
  }
}

export default TodoInsertForm;
