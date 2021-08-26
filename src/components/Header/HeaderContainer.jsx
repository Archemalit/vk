import React, {Component} from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux';
import { logoutTH } from '../../redux/auth-reducer';

class HeaderComponent extends React.Component {

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth,
  login : state.auth.login,
  smallPhoto: state.auth.smallPhoto
})

export default connect(mapStateToProps, { logoutTH })(HeaderComponent);