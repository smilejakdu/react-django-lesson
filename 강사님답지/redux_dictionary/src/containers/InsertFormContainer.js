import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import * as wordsActions from 'modules/words';
import * as wordActions from 'modules/form_word';
import * as meaningActions from 'modules/form_meaning';

import InsertForm from 'components/InsertForm';
import { bind } from 'classnames/bind';

class InsertFormContainer extends Component {
    id = 1;
    getWordId = () => {
        return this.id++;
    }

    wordChangeHandler = (e) => {
        const {value} = e.target;
        const {WordActions} = this.props;
        WordActions.change(value);
    }

    meaningChangeHandler = (e) => {
        const {value} = e.target;
        const {MeaningActions} = this.props;
        MeaningActions.change(value);
    }

    insertHandler = () => {
        const {WordsActions, WordActions, MeaningActions,  word, meaning} = this.props;
        
        const new_word = {
            id:this.getWordId(),
            word:word,
            meaning:meaning
        }
        WordsActions.add(new_word);
        WordActions.change('');
        MeaningActions.change('');
        
    };

    render() {
        const {word, meaning} = this.props;
        const {insertHandler, wordChangeHandler, meaningChangeHandler} = this;
        return (
            <InsertForm ref={this.form} insertHandler={insertHandler} word={word} meaning={meaning} wordChangeHandler={wordChangeHandler} meaningChangeHandler={meaningChangeHandler}/>
        );
    }
}

export default connect(
    (state) => ({
        word:state.word,
        meaning:state.meaning
    }),
    (dispatch) => ({
        WordsActions:bindActionCreators(wordsActions, dispatch),
        WordActions:bindActionCreators(wordActions, dispatch),
        MeaningActions:bindActionCreators(meaningActions, dispatch),
    })
)(InsertFormContainer);