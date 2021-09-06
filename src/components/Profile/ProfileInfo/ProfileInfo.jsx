import React, { Component, useState } from "react";
import Preloader from "../../common/preloader/preloader";
import ProfileDataFormRedux from "./ProfileDataForm/ProfileDataForm";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onSavePhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  
  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
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
        {props.isOwner && <input type={"file"} onChange={onSavePhoto} />}
        <div>
          Добро пожаловать {props.profile.fullName}, ваш id -{" "}
          {props.profile.userId}
        </div>

        {editMode ? (
          <ProfileDataFormRedux onSubmit={onSubmit} initialValues={props.profile} isOwner={props.isOwner} />
        ) : (
          <ProfileData profile={props.profile} isOwner={props.isOwner} toEditMode={() => {setEditMode(true)}} />
        )}

        <ProfileStatusWithHooks
          status={props.status}
          updateStatusTH={props.updateStatusTH}
        />
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.toEditMode}>Edit</button>
      </div>
      <div>
        <b>Looking for a job: </b>
        {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>Description for a job: </b>
        {props.profile.lookingForAJobDescription
          ? props.profile.lookingForAJobDescription
          : "---"}
      </div>
      <div>
        <b>FullName: </b>
        {props.profile.fullName}
      </div>
      <div>
        <b>About Me: </b>
        {props.profile.aboutMe ? props.profile.aboutMe : "---"}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        <div className={s.contacts}>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contacts contactTitle={key} contactValue={props.profile[key]} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;