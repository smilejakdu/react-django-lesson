import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const CHANGE = 'word/CHANGE';

export const change = createAction(CHANGE);

const initState = ''

export default handleActions({
    [CHANGE]:(state, action) => {
        const {payload:word} = action;
        return word;
    },
}, initState);