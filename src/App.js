import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { setInitializedTH } from './redux/app-reducer'
import { getStatusTH } from './redux/profile-reducer'
import { getMeTH } from './redux/auth-reducer'
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/preloader';

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
          <Route render={ () => <ProfileContainer /> } path='/profile/:userId?' />
          <Route render={ () => <DialogsContainer /> } path='/dialogs' />
          <Route render={ () => <UsersContainer /> } path='/users' />
          <Route render={ () => <Login /> } path='/login' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized : state.app.initialized,
  autoUserId : state.auth.userId
})

export default compose(
  withRouter,
  connect(mapStateToProps, { setInitializedTH, getStatusTH, getMeTH })
)(App);