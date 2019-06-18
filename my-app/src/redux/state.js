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
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('changed state');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.posts.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
}








export default store;
window.store = store;