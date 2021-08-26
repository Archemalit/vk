import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profile-reducer'
import MyPosts, { MyPostsReduxForm } from './MyPosts'

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;