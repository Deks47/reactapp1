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

            ]
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
        if (action.type === 'ADD-POST') {
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
        }
    }
};


export default store;
window.store = store;