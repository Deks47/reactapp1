import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";

rerenderEntireTree(state);

<<<<<<< HEAD
.....
ReactDOM.render(
=======

>>>>>>> adcc0edf521aa218cbc33e7bcd764647cf66b432



serviceWorker.unregister();
