import React from 'react';
import './SearchNote.scss';

export default function SearchNote(props) {
    const {onChangeInput} = props;
    return (
        <div className="search-field">
            <h2 className="title">Поиск заметок</h2>
            <input
                className="search"
                type="text"
                placeholder="Поиск с трёх символов"
                onChange={onChangeInput}
            />
        </div>
    );
}
