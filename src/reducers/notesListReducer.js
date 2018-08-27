let initialState = {
    toDoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            state = {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            };
            break;
        case 'DELETE_NOTE':
        case 'EDIT_NOTE':
        case 'SAVE_EDIT':
            state = {
                ...state,
                toDoList: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
