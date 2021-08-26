import React, {Component} from 'react'
import { connect } from 'react-redux';
import s from './Profile.module.css'
import Profile from './Profile'
import { getStatusTH, getProfileTH, updateStatusTH } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autoUserId;
    }
    this.props.getProfileTH(userId)
    
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusTH={this.props.updateStatusTH}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile : state.profilePage.profile,
  status : state.profilePage.status,
  autoUserId : state.auth.userId,
  isAuth : state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {getStatusTH, getProfileTH, updateStatusTH}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)