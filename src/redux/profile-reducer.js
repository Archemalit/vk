import { profileAPI } from "../api/api"
import { getMeTH } from "./auth-reducer"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SET_OWMER_PHOTO = 'SET-OWMER-PHOTO'

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likeCount: 7 },
    { id: 2, message: "It's my first post.", likeCount: 12 },
  ],
  newPostText: "it",
  profile: null,
  status : '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {id : 5, message : action.newPostText, likeCount: 0}],
                newPostText: ''
            }
        case DELETE_POST:
            return {
                ...state,
                postData: [state.postData.splice(action.userId - 1, 1)]
            }
        case SET_USER_PROFILE:
            return {...state, profile : action.profile}
        case SET_STATUS:
            return {...state, status : action.status}
        case SET_OWMER_PHOTO:
          return {...state, profile : {...state.profile, photos : action.photos}}
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: 'ADD-POST', newPostText})

export const deletePost = (userId) => ({type: 'DELETE-POST', userId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) => ({type : SET_STATUS, status})

export const setOwnerPhoto = (photos) => ({type : SET_OWMER_PHOTO, photos})

export const getProfileTH = (userId) => {
    return async (dispatch) => {
      let response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
    };
}

export const getStatusTH = (userId) => {
    return async (dispatch) => {
      let response = await profileAPI.getStatus(userId);
      dispatch(setUserStatus(response.data));
    };
}

export const updateStatusTH = (status) => {
    return async (dispatch) => {
      let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    }
}

export const savePhoto = (photos) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(photos);
    if (response.data.resultCode === 0) {
      await dispatch(getMeTH())
      dispatch(setOwnerPhoto(response.data.data.photos));
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getProfileTH(userId));
    }
  }
}

export default profileReducer;