import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    setTranslations, setDefaultLanguage, getLanguages, setLanguage,
} from 'react-switch-lang';
import changeLanguage from '../redux/actions/changeLanguage';

import es from '../languages/es.json';
import en from '../languages/en.json';

class Language extends Component {
    constructor(props) {
        super(props);
        const { currentLanguage } = this.props;
        setTranslations({ es, en });
        setDefaultLanguage(currentLanguage);
    }

    handleChange = (event) => {
        const selected = event.target.value;
        const { changeLanguageProps } = this.props;
        changeLanguageProps(selected);
        setLanguage(selected);
    }

    render() {
        const { currentLanguage } = this.props;
        const languageList = getLanguages();
        return (
            <div className="app">
                <select onChange={this.handleChange} defaultValue={currentLanguage}>
                    {languageList.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>

            </div>
        );
    }
}

Language.propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    changeLanguageProps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = {
    changeLanguageProps: changeLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
