import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { saveState } from './redux/store';

import AppRouter from './AppRouter';

import './App.scss';

class App extends Component {
    componentDidMount() {
        window.addEventListener('unload', saveState);
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

export default App;
