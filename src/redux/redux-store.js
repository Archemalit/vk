import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form : formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;