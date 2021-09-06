import React, {Component} from 'react'
import MyPosts from './My Posts/MyPosts';
import MyPostsContainer from './My Posts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
      <div>
        <ProfileInfo
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatusTH={props.updateStatusTH}
          saveProfile={props.saveProfile}
        />
        <MyPostsContainer />
      </div>
    );
}

export default Profile;