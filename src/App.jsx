import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setTranslations, setDefaultLanguage, translate } from 'react-switch-lang';
import './App.scss';

import es from './languages/es.json';
import en from './languages/en.json';

class App extends Component {
    constructor(props) {
        super(props);
        setTranslations({ es, en });
        setDefaultLanguage('en');
    }

    render() {
        const { t } = this.props;
        return (
            <div className="app">
                {t('app.text')}
            </div>
        );
    }
}

App.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(App);
