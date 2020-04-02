import { combineReducers } from 'redux';

import vastsReducer from './vastsReducer';

export default combineReducers({
    vasts: vastsReducer
});
