import React, { Component } from "react";

// 단어 등록 form

class MemoInsertForm extends Component {
  render() {
    const {
      word,
      meaning,
      wordOnChange,
      meaningOnChange,
      insertHandler,
    } = this.props;
    return (
      <div>
        <div>
          <input type="text" onChange={wordOnChange} value={word} />
        </div>
        <div>
          <input type="text" onChange={meaningOnChange} value={meaning} />
        </div>
        <div>
          <button onClick={insertHandler}>입력</button>
        </div>
      </div>
    );
  }
}

export default MemoInsertForm;
