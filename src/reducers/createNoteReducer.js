let initialState = {
    inputText: '',
    colorList: [
        {
            backgroundColor: '#ddffff',
            borderColor: '#2196F3',
            text: 'Наименьший приоритет'
        },
        {
            backgroundColor: '#ffffcc',
            borderColor: '#ffc107',
            text: 'Средний приоритет'
        },
        {
            backgroundColor: '#ffdddd',
            borderColor: '#f44336',
            text: 'Высокий приоритет'
        },
        {
            backgroundColor: 'white',
            borderColor: 'black',
            text: 'Все цвета'
        }
    ],
    currentColor: {
        currentBackgroundColor: '#ddffff',
        currentBorderColor: '#2196F3'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NOTE_TEXT':
            state = {
                ...state,
                inputText: action.payload
            };
            break;
        case 'ADD_NOTE':
            state = {
                ...state,
                inputText: ''
            };
            break;
        case 'SELECTED_COLOR':
            state = {
                ...state,
                currentColor: {
                    currentBackgroundColor: action.payload.backgroundColor,
                    currentBorderColor: action.payload.borderColor
                }
            };
            break;
        default:
            break;
    }
    return state;
};
