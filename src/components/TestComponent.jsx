import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-switch-lang';

const TestComponent = (props) => {
    const { t } = props;

    return (
        <div>
            {t('app.text')}
        </div>
    );
};

TestComponent.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(TestComponent);
