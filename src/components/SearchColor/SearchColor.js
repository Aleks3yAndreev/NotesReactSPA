import React from 'react';
import './SearchColor.scss';

export default class SearchColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            transform: 'rotate(-90deg)',
            selectedColor: {
                backgroundColor: '',
                borderColor: '',
                text: 'Все цвета'
            }
        }
    }

    onClickFindColorsHandler = () => {
        this.setState({
            display: this.state.display === 'none' ? 'block' : 'none',
            transform: this.state.transform === 'rotate(-90deg)' ? 'rotate(90deg)' : 'rotate(-90deg)'
        });
    };

    onClickListItemHandler = colorItem => {
        this.setState({
            selectedColor: {
                backgroundColor: colorItem.backgroundColor,
                borderColor: colorItem.borderColor,
                text: colorItem.text
            }
        });
    };

    render() {
        const {
            display,
            transform,
            selectedColor
            } = this.state;
        const {
            colorList,
            pickedColor
            } = this.props;
        return (
            <div className="search-colors">
                <span>Поиск по цвету :</span>
                <div
                    className="find-color"
                    onClick={this.onClickFindColorsHandler}
                >
                    <span
                        className="color"
                        style={
                        {backgroundColor: selectedColor.backgroundColor,
                        borderColor: selectedColor.borderColor}
                        }
                    />
                    {selectedColor.text}
                    <span
                        className="arrow"
                        style={{transform: transform}}
                    >
                        >
                    </span>
                    <ul
                        className="drop-menu"
                        style={{display: display}}
                    >
                        {
                            colorList.map((colorItem, index) => {
                                return (
                                    <li
                                        className='item'
                                        key={index}
                                        onClick={() => {
                                        this.onClickListItemHandler(colorItem);
                                        pickedColor(colorItem.backgroundColor)
                                        }}
                                    >
                                        <span
                                            className="color"
                                            style={
                                            {backgroundColor: colorItem.backgroundColor,
                                             borderColor: colorItem.borderColor}
                                            }
                                        />
                                        {colorItem.text}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}