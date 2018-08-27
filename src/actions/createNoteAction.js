export const changeInputAction = value => {
    return {type: 'NOTE_TEXT', payload: value};
};
export const addNewNoteAction = newNote => {
    return {type: 'ADD_NOTE', payload: newNote};
};
export const pickedColorAction = colorParam => {
    return {type: 'SELECTED_COLOR', payload: colorParam};
};