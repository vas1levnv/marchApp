const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how are you?', likeCounts: 12},
                {id: 2, message: 'my first post', likeCounts: 11},
            ],
            newPostText: 'hey hey'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'},
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE){
            let body =  this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: 6, message: body,})
            this._callSubscriber(this._state)
        }
    },
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT,newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,body: text})

export default store

window.store = store