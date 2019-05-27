import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Test drive', likesCount: 0},
    {id: 2, message: 'First post', likesCount: 23},


]

let dialogs = [
    {id: 1, name: 'John'},
    {id: 2, name: 'James'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Said'},
    {id: 5, name: 'Hurley'},
    {id: 6, name: 'Jack'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Allow me introduce myself'},

]
ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
