const UPDATE_NEW_FRIEND = 'UPDATE-NEW-FRIEND'
const ADD_FRIEND = 'ADD-FRIEND'

let initialState = {
    friends : [
        {name: 'Sasha', id : 1},
        {name: 'Victor', id : 2},
        {name: 'Ivan', id : 1},
        {name: 'Kate', id : 2}
      ],
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
        default:
            return state
    }
}

export const addFriend = (newFriend) => ({type : 'ADD-FRIEND', newFriend})

export default sidebarReducer;