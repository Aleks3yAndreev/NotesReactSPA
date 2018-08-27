import React from 'react';
import './ToDoList.scss';
import CreateNote from '../CreateNote/CreateNote';
import SearchNotes from '../SearchNotes/SearchNotes';
import NoteList from '../NoteList/NoteList';
import { connect } from 'react-redux';
import {
    deleteNoteAction,
    editNoteAction,
    saveEditAction
} from '../../actions/notesListAction';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    getFilteredList = (notesList, params = {}) => {
        let searchQuery = params.searchQuery.toLowerCase();
        let colorQuery = params.colorQuery === 'white' ? '' : params.colorQuery;
        searchQuery = searchQuery.length > 2 ? searchQuery : '';
        return notesList.filter(note => {
            return note.title.toLowerCase().includes(searchQuery) &&
                note.backgroundColor.includes(colorQuery);
        });
    };

    onClickDeleteButtonHandler = currentIndex => {
        let list = [...this.props.notesList.toDoList];
        list.splice(currentIndex, 1);
        this.props.deleteNote(list);
    };

    onDoubleClickMessageHandler = currentIndex => {
        let list = [...this.props.notesList.toDoList];
        list[currentIndex].mode = 'EDIT';
        this.props.editNote(list);
    };

    onRenderTitle = listItem => {
        return <span>{listItem.title}</span>;
    };

    onRenderTextarea = (listItem, index) => {
        return <textarea
            defaultValue={listItem.title}
            onKeyPress={e => {this.onKeyPressEnterHandler(listItem, index, e)}}
            autoFocus={true}
            rows="5"
            cols="14"
        />;
    };

    onKeyPressEnterHandler = (listItem, index, e) => {
        if (e.which === 13) {
            let list = [...this.props.notesList.toDoList];
            list[index] = {
                ...listItem,
                title: e.target.value,
                mode: 'READ_ONLY'
            };
            this.props.saveEdit(list);
        }
    };

    render() {
        const {
            searchInput,
            colorQuery
            } = this.props.searchNote;
        const {toDoList} = this.props.notesList;
        return (
            <div className="wrapper">
                <CreateNote />
                <SearchNotes />
                {
                    toDoList.length > 0 &&
                    <NoteList
                        list={this.getFilteredList(
                        toDoList,
                        {
                        searchQuery: searchInput,
                        colorQuery: colorQuery
                         }
                         )}
                        onDoubleClickMessage={this.onDoubleClickMessageHandler}
                        onClickDeleteButton={this.onClickDeleteButtonHandler}
                        onRenderTitle={this.onRenderTitle}
                        onRenderTextarea={this.onRenderTextarea}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchNote: state.searchNoteReducer,
        notesList: state.notesListReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: note => dispatch(deleteNoteAction(note)),
        editNote: note => dispatch(editNoteAction(note)),
        saveEdit: value => dispatch(saveEditAction(value))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);