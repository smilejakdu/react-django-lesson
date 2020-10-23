import React, { Component } from "react";
import MemoInsertForm from "../components/MemoInsertForm/MemoInsertForm";

// 연결하기 위한
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as formActions from "../modules/form";
import * as itemActions from "../modules/item";

class MemoInsertFormContainer extends Component {
  id = 0;

  getItemId = () => {
    return this.id++;
  };

  wordChangeHandler = (e) => {
    const { word } = e.target;
    const { FormActions } = this.props;
    FormActions.wordChange(word);
  };

  meaningChangeHandler = (e) => {
    const { meaning } = e.target;
    const { FormActions } = this.props;
    FormActions.meaningChange(meaning);
  };

  insertHandler = (e) => {
    //  액션 전달 , 값
    const { word, meaning, FormActions, ItemActions } = this.props;
    const new_item = {
      word: word,
      meaning: meaning,
      id: this.getItemId(),
    };
    ItemActions.add(new_item);
    // form 비워주기 <--- 방명록 입력창, 댓글 입력창
    FormActions.wordChange("");
    FormActions.meaningChange("");
  };

  render() {
    const { word, meaning } = this.props;
    const { wordChangeHandler, meaningChangeHandler, insertHandler } = this;
    return (
      <MemoInsertForm
        word={word}
        meaning={meaning}
        wordOnChange={wordChangeHandler}
        meaningOnChange={meaningChangeHandler}
        insertHandler={insertHandler}
      />
    );
  }
}

export default connect(
  (state) => ({
    word: state.form.get("word"),
    meaning: state.form.get("meaning"),
  }),
  (dispatch) => ({
    FormActions: bindActionCreators(formActions, dispatch),
    ItemActions: bindActionCreators(itemActions, dispatch),
  })
)(MemoInsertFormContainer);
