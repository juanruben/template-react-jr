export const type = 'changeLanguage';

const changeLanguage = (lang) => ({
    type,
    payload: lang,
});

export default changeLanguage;
