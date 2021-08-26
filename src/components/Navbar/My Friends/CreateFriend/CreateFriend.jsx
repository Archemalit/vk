import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import s from './CreateFriend.module.css'

const CreateFriend = (props) => {
  
  let site = ''
  if (props.id === 1){
    site = 'https://master-str.com/images/catalog/terra_design_mono_5.jpg'
  }else{
    site = 'https://kazan.megastroy.com/storage/products/263960_1_d086b30f4c9373c8f9da85ac3f4dcd73.jpg'
  }

    return (
      <div className={s.main}>
        <div className={s.item}>{props.name}</div>
        <div className={s.item1}>
          <img
            src={site}
            className={s.friendSquare}
          />
        </div>
      </div>
    );
}

export default CreateFriend;