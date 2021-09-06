import React, {Component} from 'react'
import { connect } from 'react-redux';
import s from './Profile.module.css'
import Profile from './Profile'
import { getStatusTH, getProfileTH, savePhoto, updateStatusTH, saveProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.autoUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getProfileTH(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
    this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusTH={this.props.updateStatusTH}
        saveProfile={this.props.saveProfile}
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
  connect(mapStateToProps, {getStatusTH, getProfileTH, updateStatusTH, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)