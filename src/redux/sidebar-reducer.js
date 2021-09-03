const ADD_FRIEND = 'ADD-FRIEND'
const VIEW_FRIEND = 'VIEW-FRIEND'

let initialState = {
    friends : [],
    newSideText: ''
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, {name : action.newFriend, id : 1}],
                newSideText: ''
            }
        case VIEW_FRIEND:
            return {
                ...state,
                friends : [...state.friends, {name: action.newFriend, id : action.userId}]
            }
        default:
            return state
    }
}

export const addFriend = (newFriend) => ({type : 'ADD-FRIEND', newFriend})

export const viewFriends = (newFriend, userId) => ({type : 'VIEW-FRIEND', newFriend, userId})

export default sidebarReducer;