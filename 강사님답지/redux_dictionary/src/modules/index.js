import {combineReducers} from 'redux';
import words from './words';
import word from './form_word';
import meaning from './form_meaning';
export default combineReducers({
    // 리듀서 목록 추가
    words,
    word,
    meaning,
});