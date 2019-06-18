import * as serviceWorker from './serviceWorker';
import store, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(state.getState());

store.subscribe(rerenderEntireTree);



serviceWorker.unregister();








