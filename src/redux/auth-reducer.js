import { stopSubmit } from "redux-form"
import { authAPI, profileAPI } from "../api/api"
import { setUserStatus } from "./profile-reducer"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO_SMALL = 'SET_USER_PHOTO_SMALL'

debugger
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
  return (dispatch) => {
    return authAPI.getMe().then((response) => {
      if (response.resultCode === 0) {
        let id = response.data.id;
        let login = response.data.login;
        let email = response.data.email;
        dispatch(setUserData(id, email, login, true));
        profileAPI.getStatus(id).then((response) => {
          dispatch(setUserStatus(response.data))
        })
        authAPI.getMePhoto(id).then((response) => {
          dispatch(setUserPhotoSmall(response));
        });
      }
    });
  };
};

export const loginTH = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getMeTH())
      }
      else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: message }))
      }
    })
  };
};

export const logoutTH = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        debugger
        dispatch(setUserData(null, null, null, false))
      }
    })
  };
};

export default authReducer;