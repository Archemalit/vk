import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage : {
            postData: [
                { id: 1, message: "Hi, how are you?", likeCount: 7 },
                { id: 1, message: "Hi, how are you?", likeCount: 16 },
                { id: 2, message: "It's my first post.", likeCount: 12 }],
            newPostText : 'it'
        },
        messagesPage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: 'How is your IT?' },
                { id: 3, message: "What's up men!" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" }],
            dialogsData: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Valera" },
                { id: 3, name: "Sasha" },
                { id: 4, name: "Victor" },
                { id: 5, name: "Kate" },
                { id: 6, name: "Sveta" }],
            newChatText: ''
        },
        sidebarPage: {
            friends : [
                {name: 'Sasha', id : 1},
                {name: 'Victor', id : 2},
                {name: 'Ivan', id : 1},
                {name: 'Kate', id : 2}
              ],
            newSideText: ''
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('!')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._rerenderEntireTree(this._state)
    }

}

export default store;
window.store = store