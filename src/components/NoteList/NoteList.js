import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.scss';

export default function NoteList(props) {
    const {
        list,
        onDoubleClickMessage,
        onClickDeleteButton,
        onRenderTitle,
        onRenderTextarea
        } = props;
    return (
        <ul className="clr">
            {
                list.map((listItem, index) =>
                    <NoteItem
                        key={index}
                        listItem={listItem}
                        currentIndex={index}
                        onDoubleClickMessage={onDoubleClickMessage}
                        onClickDeleteButton={onClickDeleteButton}
                        onRenderTitle={onRenderTitle}
                        onRenderTextarea={onRenderTextarea}
                    />
                )
            }
        </ul>
    );
}