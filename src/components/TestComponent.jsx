import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-switch-lang';
import { getTest } from '../services/Api';

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        await getTest()
            .then((response) => {
                this.setState(response.data);
            }).catch(() => {
            });
    }

    render() {
        const { t } = this.props;
        const { hello } = this.state;
        return (
            <div>
                {t('app.text')}
                <div>{hello && `Hello ${hello}`}</div>
            </div>
        );
    }
}

TestComponent.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(TestComponent);
