export const deleteNoteAction = note => {
    return {type: 'DELETE_NOTE', payload: note};
};
export const editNoteAction = note => {
    return {type: 'EDIT_NOTE', payload: note};
};
export const saveEditAction = value => {
    return {type: 'SAVE_EDIT', payload: value};
};
