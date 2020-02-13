import { createStore, combineReducers } from 'redux';
import currentLanguage from './reducers/currentLanguage';

const reducer = combineReducers({
    currentLanguage,
});

const store = createStore(reducer);

export default store;
