import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { saveState } from './redux/store';

import Language from './components/Language';
import TestComponent from './components/TestComponent';

import './App.scss';

class App extends Component {
    componentDidMount() {
        window.addEventListener('unload', saveState);
    }

    render() {
        return (
            <Provider store={store}>
                <Language />
                <TestComponent />
            </Provider>
        );
    }
}

export default App;
