import { createStore, combineReducers } from 'redux';
import currentLanguage from './reducers/currentLanguage';

const reducer = combineReducers({
    currentLanguage,
});

const globalState = localStorage.getItem('GLOBAL_STATE');
const initialState = globalState ? JSON.parse(globalState) : undefined;
const store = createStore(reducer, initialState);


export const saveState = () => {
    localStorage.setItem('GLOBAL_STATE', JSON.stringify(store.getState()));
};

export default store;
