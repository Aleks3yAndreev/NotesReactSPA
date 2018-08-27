import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList/ToDoList';
import { Provider } from 'react-redux';
import store from './store';
import './styles/reset.scss';
import './styles/styles.scss';

ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>,
    document.getElementById('root')
);

