import { handleActions, createAction } from 'redux-actions';

const CHANGE = 'meaning/CHANGE';

export const change = createAction(CHANGE);

const initState = '';

export default handleActions({
    [CHANGE]:(state, action) => {
        const {payload:meaning} = action;
        return meaning
    },
}, initState);