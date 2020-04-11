export const UPDATE_LOCALE = 'UPDATE_LOCALE';

export const handleLocaleChange = (locale) => (dispatch) => {
    dispatch({
        type: UPDATE_LOCALE,
        payload: locale,
    });

    // this.props.i18n.changeLanguage(locale);

};
