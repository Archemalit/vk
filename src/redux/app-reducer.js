import { actionTypes, stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import { getMeTH } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    initialized : false
}

const appReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_INITIALIZED:
        return {
          ...state,
          initialized: true,
        };
    default:
        return state
}
}


export const setInitialized = () => ({type: SET_INITIALIZED})

export const setInitializedTH = () => {
  return (dispatch) => {
    let promise = dispatch(getMeTH())
    promise.then(() => {
      dispatch(setInitialized())
    })
  }
}

export default appReducer;