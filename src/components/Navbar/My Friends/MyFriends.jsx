import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form';
import CreateFriend from './CreateFriend/CreateFriend';
import s from './MyFriends.module.css'

const MyFriends = (props) => {
  
  let makeFriend = props.friends.map( (person) => <CreateFriend name={person.name} id={person.id} /> )

  let addNewFriend = (value) => {
    props.addFriend(value.newFriend)
  }

    return (
      <nav className={s.nav}>
        <div className={s.item + ' ' + s.friends}>
          <a>My Friends</a>
        </div>
        {makeFriend}
        <NewFriendFormRedux onSubmit={ addNewFriend } />
      </nav>
    );
}

const NewFriendForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={"textarea"}
        placeholder={"Enter friend's name"}
        name={"newFriend"}
      />
      <button>Add Friend</button>
    </form>
  );
}

const NewFriendFormRedux = reduxForm({ form : 'newFriendForm' })(NewFriendForm)

export default MyFriends;