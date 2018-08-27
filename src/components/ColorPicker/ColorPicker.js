import React from 'react';
import './ColorPicker.scss';

export default function ColorPicker(props) {
    const {
        currentColor,
        onClickColorItem,
        colorList
        } = props;
    return (
        <div className="choose-color">
            <span>Выберите цвет :</span>
            <ul className="color-list">
                {
                    colorList.slice(0, -1).map((colorItem, index) =>
                        <li
                            className={
                            colorItem.backgroundColor ==  currentColor.currentBackgroundColor ?
                             'item current' :
                              'item'
                             }
                            style={
                            {backgroundColor: colorItem.backgroundColor,
                             borderColor: colorItem.borderColor}
                            }
                            key={index}
                            onClick={() => {onClickColorItem(colorItem)}}
                        />
                    )
                }
            </ul>
        </div>
    );
}
