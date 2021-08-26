import React, {Component} from 'react'
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader />
  }

    return (
      <div>
        <div className={s.descriptionBlock}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : "https://www.joeroganfans.net/wp-content/uploads/2019/06/Unknown-person.jpg"
            }
            className={s.descriptionImage}
          />
          <div>
            Добро пожаловать {props.profile.fullName}, ваш id -{" "}
            {props.profile.userId}
          </div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatusTH={props.updateStatusTH}
          />
        </div>
      </div>
    );
}

export default ProfileInfo;