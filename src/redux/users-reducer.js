import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT = 'SET_CURRENT'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize : 10,
    totalItemsCount : 0,
    current : 1,
    isFetching : true,
    followingInProgress : [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                 users: state.users.map(u => {
                     if (u.id === action.userId){
                         return {...u, followed : action.followOrNot}
                     }
                     return u
                 })
                }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case SET_CURRENT:{
            return {...state, current: action.current}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalItemsCount : action.totalCount}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching : action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state, followingInProgress : action.isFetching 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id != action.userId)}
        }
        default:
            return state
    }
}

export const follow = (userId, followOrNot) => ({type: FOLLOW, userId, followOrNot})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrent = (current) => ({type: SET_CURRENT, current})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getNewUsers = (current, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrent(current));
        let response = await userAPI.getUsers(current, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
}
}

export const getUsersTC = (current, pageSize) => {
    return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      let response = await userAPI.getUsers(current, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
    };
}

export const deleteUser = (id) => {
    return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, id));
      let response = await userAPI.getUnfollowed(id);
      if (response.resultCode === 0) {
        dispatch(follow(id, false));
      }
      dispatch(toggleFollowingProgress(false, id));
    };
}

export const postUser = (id) => {
    return async (dispatch) => {
      dispatch(toggleFollowingProgress(true, id));
      let response = await userAPI.getFollowed(id)
        if (response.resultCode === 0) {
          dispatch(follow(id, true));
        }
        dispatch(toggleFollowingProgress(false, id));
    }
}

export default usersReducer;