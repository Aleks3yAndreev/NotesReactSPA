import React from 'react';
import SearchNote from '../SearchNote/SearchNote';
import SearchColor from '../SearchColor/SearchColor';
import './SearchNotes.scss';
import { connect } from 'react-redux';
import {
    changeSearchInputAction,
    filteredByColorAction
} from '../../actions/searchNoteAction';

class SearchNotes extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeSearchInputHandler = e => {
        this.props.changeSearchInput(e.target.value);
    };

    getPickedColor = value => {
        this.props.filteredByColor(value);
    };

    render() {
        const {colorList} = this.props.createNote;
        return (
            <section className="search-notes">
                <SearchNote
                    onChangeInput={this.onChangeSearchInputHandler}
                />
                <SearchColor
                    colorList={colorList}
                    pickedColor={this.getPickedColor}
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
        changeSearchInput: value => dispatch(changeSearchInputAction(value)),
        filteredByColor: data => dispatch(filteredByColorAction(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchNotes);