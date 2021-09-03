import React, {Component} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { setInitializedTH } from './redux/app-reducer'
import { getStatusTH } from './redux/profile-reducer'
import { getMeTH } from './redux/auth-reducer'
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/preloader/preloader';
import store from './redux/redux-store';
import FastConnectAppComponents from './HOC/FastConnectAppComponents';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends Component {

  componentDidMount(){
    this.props.setInitializedTH()
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderComponent />
        <Navbar />
        <div class="app-wrapper-content">
          <Route render={() => <ProfileContainer />} path="/profile/:userId?" />
          <Route render={ FastConnectAppComponents(DialogsContainer) } path="/dialogs" />
          <Route render={ FastConnectAppComponents(UsersContainer) } path="/users" />
          <Route render={() => <Login />} path="/login" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized : state.app.initialized,
  autoUserId : state.auth.userId
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { setInitializedTH, getStatusTH, getMeTH })
)(App);

const MainApp = (props) => {
  return(
    <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
    </BrowserRouter>
  )
}

export default MainApp;