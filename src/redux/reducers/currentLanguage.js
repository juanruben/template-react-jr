const defaultState = 'es';

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'changeLanguage': {
            return payload;
        }

        default:
            return state;
    }
}

export default reducer;
