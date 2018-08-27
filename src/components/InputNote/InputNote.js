import React from 'react';
import './InputNote.scss';

export default function InputNote(props) {
    const {
        onChangeInput,
        value,
        onClickButtonSave,
        disabledButton
        } = props;
    return (
        <div className="input-note">
            <h2 className="title">Введите заметки</h2>
            <input
                className="note-text"
                type="text"
                onChange={onChangeInput}
                value={value}
            />
            <button
                className="save-btn"
                onClick={onClickButtonSave}
                disabled={disabledButton}
            >
                Save
            </button>
        </div>
    );
}
