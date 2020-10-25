import React, { Component, createRef } from 'react';

class InsertForm extends Component {
    constructor(props) {
        super(props);
        this.word_input = createRef();
        this.meaning_input = createRef();
    }

    btnPress = (e) => {
        const { insertHandler } = this.props;
        e.preventDefault();
        insertHandler();
        this.word_input.current.focus();
    };
    render() {
        const { btnPress } = this;
        const {
            wordChangeHandler,
            meaningChangeHandler,
            word,
            meaning,
        } = this.props;
        return (
            <form className="mb-3">
                <div className="form-group">
                    <label htmlFor={this.word_input.current}>Word</label>
                    <input
                        type="text"
                        className="form-control"
                        ref={this.word_input}
                        placeholder="단어를 입력하세요."
                        onChange={wordChangeHandler}
                        value={word}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor={this.meaning_input.current}>Meaning</label>
                    <input
                        type="text"
                        className="form-control"
                        ref={this.meaning_input}
                        placeholder="단어의 뜻을 입력하세요."
                        onChange={meaningChangeHandler}
                        value={meaning}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={btnPress}
                >
                    Add
                </button>
            </form>
        );
    }
}

export default InsertForm;
