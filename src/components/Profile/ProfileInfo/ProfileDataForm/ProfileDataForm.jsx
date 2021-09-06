import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../../common/FormsControls/FormsControls";
import s from "./ProfileDataForm.module.css";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Looking for a job: </b>
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>Description for a job: </b>
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea, )}
      </div>
      <div>
        <b>FullName: </b>
        {createField("Fullname", "fullName", [], Input)}
      </div>
      <div>
        <b>About Me: </b>
        {createField("Something interesting", "aboutMe", [], Textarea)}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form : 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux;