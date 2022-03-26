let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi how are you?', likeCounts: 12},
            {id: 2, message: 'my first post', likeCounts: 11},
        ],
        newPostText: 'hey hey'
    },

    messagesPage:{
    dialogs: [
        {id:1, name: 'Dima'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Sveta'},
        {id:4, name: 'Sasha'},
        {id:5, name: 'Viktor'},
        {id:6, name: 'Valera'},
    ],
    messages: [
        {id:1, message: 'hi'},
        {id:2, message: 'how are you?'},
        {id:3, message: 'yo'},
        {id:4, message: 'yo'},
        {id:5, message: 'yo'},
    ]
    }

}

window.state = state

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state