import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addFriend } from '../../../redux/sidebar-reducer';
import MyFriends from './MyFriends';

let mapStateToProps = (state) => {
  return {
    newSideText: state.sidebarPage.newSideText,
    friends: state.sidebarPage.friends
  }
}

const MyFriendsContainer = connect(mapStateToProps, { addFriend })(MyFriends)

export default MyFriendsContainer;