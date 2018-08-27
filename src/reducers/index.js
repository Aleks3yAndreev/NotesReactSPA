import { combineReducers } from "redux";
import createNoteReducer from './createNoteReducer';
import searchNoteReducer from './searchNoteReducer';
import notesListReducer from './notesListReducer';

export default combineReducers({
    createNoteReducer,
    searchNoteReducer,
    notesListReducer
});
