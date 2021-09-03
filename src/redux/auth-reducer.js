import { stopSubmit } from "redux-form"
import { authAPI, profileAPI } from "../api/api"
import { setUserStatus } from "./profile-reducer"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO_SMALL = 'SET_USER_PHOTO_SMALL'

let initialState = {
    userId : null,
    email : null,
    login : null,
    isAuth : false,
    smallPhoto : null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_USER_DATA:
        return {
            ...state,
            ...action.data,
            }
    case SET_USER_PHOTO_SMALL:
        return {
            ...state,
            smallPhoto : action.smallPhoto
        }
    default:
        return state
}
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const setUserPhotoSmall = (smallPhoto) => ({type: SET_USER_PHOTO_SMALL, smallPhoto})

export const getMeTH = () => {
  return async (dispatch) => {
    let response = await authAPI.getMe()
      if (response.resultCode === 0) {
        let id = response.data.id;
        let login = response.data.login;
        let email = response.data.email;
        dispatch(setUserData(id, email, login, true));
        let response_1 = await profileAPI.getStatus(id)
        dispatch(setUserStatus(response_1.data))
        let response_2 = await authAPI.getMePhoto(id)
        dispatch(setUserPhotoSmall(response_2));
      }
  };
};

export const loginTH = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
      if (response.data.resultCode === 0) {
        dispatch(getMeTH())
      }
      else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: message }))
      }
  };
};

export const logoutTH = () => {
  return async (dispatch) => {
    let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
  };
};

export default authReducer;