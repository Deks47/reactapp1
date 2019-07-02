const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';




let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Test drive', likesCount: 0},
                {id: 2, message: 'First post', likesCount: 23},


            ],

        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'John'},
                {id: 2, name: 'James'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Said'},
                {id: 5, name: 'Hurley'},
                {id: 6, name: 'Jack'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Allow me introduce myself'},

            ],
            newMessageBody : ''
        }

    },
    _callSubscriber() {
        console.log('changed state');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.__callSubscriber = observer;
    },




    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody.action.body;
            this._callSubscriber(this._state);

        else if (action.type === 'SEND_MESSAGE') {
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this.state.dialogsPage.messages.push({id: 4, message: body});
                this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

};

export const sendMessageCreator = () => {

    return
    ({type: SEND_MESSAGE})

};

export const updateNewMessageBodyCreator = (body) => {
    return
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

};

export default store;
window.store = store;