let rerenderEntireTree = () => {
    console.log('changed state');
}

let state = {
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

}

window.state = state;

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.posts.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {

}

export default state;
