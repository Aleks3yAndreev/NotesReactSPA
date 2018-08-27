let initialState = {
    searchInput: '',
    colorQuery: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_NOTES':
            state = {
                ...state,
                searchInput: action.payload
            };
            break;
        case 'FILTER_NOTES_BY_COLOR':
            state = {
                ...state,
                colorQuery: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
