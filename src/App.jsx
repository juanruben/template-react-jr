import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Language from './components/Language';
import TestComponent from './components/TestComponent';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <Language />
        <TestComponent />
    </Provider>
);

export default App;
