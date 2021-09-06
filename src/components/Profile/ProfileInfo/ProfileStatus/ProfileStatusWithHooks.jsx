import React, {Component, useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'


const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatusTH(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value) 
   }

    return (
      <div>
        {!editMode && (
          <div>
            <b>Status:</b>
            <span onDoubleClick={ activateEditMode }>
              {status === '' ? ' No status' : ' ' + status}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input onChange={ onStatusChange }
              autoFocus={ true }
              onBlur={ deactivateEditMode }
              value={ status }
            />
          </div>
        )}
      </div>
    );
  }


export default ProfileStatusWithHooks;