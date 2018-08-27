import React from 'react';
import InputNote from '../InputNote/InputNote';
import ColorPicker from '../ColorPicker/ColorPicker';
import './CreateNote.scss';
import { connect } from 'react-redux';
import {
    changeInputAction,
    addNewNoteAction,
    pickedColorAction
} from '../../actions/createNoteAction';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeInputHandler = e => {
        this.props.changeInput(e.target.value);
    };

    onClickSaveButtonHandler = () => {
        let newListItem = {
            title: this.props.createNote.inputText,
            mode: 'READ_ONLY',
            backgroundColor: this.props.createNote.currentColor.currentBackgroundColor,
            borderColor: this.props.createNote.currentColor.currentBorderColor
        };
        this.props.addNewNote(newListItem);
    };

    onClickColorItemHandler = colorItem => {
        this.props.pickedColor(colorItem);
    };

    render() {
        const {
            inputText,
            currentColor,
            colorList
            } = this.props.createNote;
        return (
            <section className="create-note">
                <InputNote
                    onChangeInput={this.onChangeInputHandler}
                    value={inputText}
                    onClickButtonSave={this.onClickSaveButtonHandler}
                    disabledButton={!inputText}
                />
                <ColorPicker
                    colorList={colorList}
                    currentColor={currentColor}
                    onClickColorItem={this.onClickColorItemHandler}
                />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        createNote: state.createNoteReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeInput: value => dispatch(changeInputAction(value)),
        addNewNote: newNote => dispatch(addNewNoteAction(newNote)),
        pickedColor: colorParam => dispatch(pickedColorAction(colorParam))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);