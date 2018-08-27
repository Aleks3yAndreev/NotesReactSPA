import React from 'react';
import './NoteItem.scss';

export default function NoteItem(props) {
    const {
        listItem,
        currentIndex,
        onDoubleClickMessage,
        onRenderTitle,
        onRenderTextarea,
        onClickDeleteButton
        } = props;
    return (
        <li
            className="note-item"
            style={{backgroundColor: listItem.backgroundColor, borderColor: listItem.borderColor}}
            onDoubleClick={() => {onDoubleClickMessage(currentIndex)}}
        >
            {
                listItem.mode === 'READ_ONLY' ?
                    onRenderTitle(listItem) :
                    onRenderTextarea(listItem, currentIndex)
            }
            <button
                className="delete-btn btn"
                onClick={() => {onClickDeleteButton(currentIndex)}}
            >
                x
            </button>
            <div className="description">
                <span>Double Click - редактировать</span>
                <span>Enter - сохранить</span>
            </div>
        </li>
    );
}