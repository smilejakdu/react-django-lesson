import { List, Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const ADD = 'words/ADD';
const DEL = 'words/DEL';

export const add = createAction(ADD);
export const del = createAction(DEL);

const initState = List([]);

export default handleActions({
    [ADD]:(state, action) => {
        const {id, word, meaning} = action.payload;
        return state.push(Map({
            id,
            word,
            meaning
        }));
    },
    [DEL]:(state, action) => {
        const {payload:id} = action;
        return state.filter(word => word.get('id')!==id);
    },
}, initState);