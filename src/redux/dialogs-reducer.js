const ADD_CHAT = 'ADD-CHAT'
const UPDATE_NEW_CHAT_TEXT = 'UPDATE-NEW-CHAT-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_CHAT:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: action.newAddChat }],
      } 
    default:
      return state
  }
}

export const addChat = (newAddChat) => ({type: 'ADD-CHAT', newAddChat})

export default dialogsReducer;