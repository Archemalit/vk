import React, {Component} from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='https://drasler.ru/wp-content/uploads/2019/10/Скачать-крутые-и-лучшие-фото-на-аватарку-в-вк-для-пацанов015-1024x1024.jpg' />
        {props.message}
        <div><span>like - {props.likeCount}</span></div>
      </div>
    );
}

export default Post;