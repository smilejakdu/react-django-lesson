import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import WordItemList from 'components/WordItemList';
import * as wordActions from 'modules/words';

class WordItemListContainer extends Component {

    deleteHandler = (id) => {
        const {WordActions} = this.props;
        WordActions.del(id);
    }
    
    render() {
        const {words} = this.props;
        return (
            <WordItemList words={words} deleteHandler={this.deleteHandler}/>
        );
    }
}


export default connect(
    (state) => ({
        words:state.words,
    }),
    (dispatch) => ({
        WordActions:bindActionCreators(wordActions, dispatch),
    })
)(WordItemListContainer);