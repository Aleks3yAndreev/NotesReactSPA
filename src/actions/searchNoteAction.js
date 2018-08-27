export const changeSearchInputAction = value => {
    return {type: 'SEARCH_NOTES', payload: value};
};
export const filteredByColorAction = data => {
    return {type: 'FILTER_NOTES_BY_COLOR', payload: data};
};
