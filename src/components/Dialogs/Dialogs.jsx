import React, {Component} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.messagesData.map((message) => (
      <Message message={message.message} />
    ));
    
    let addNewChat = (value) => {
      props.addChat(value.newAddChat)
    }

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          <AddChatFormRedux onSubmit={ addNewChat }/>
        </div>
      </div>
    );
}

const AddChatForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength100]}
        placeholder={"Enter your message"}
        name={"newAddChat"}
      />
      <button>Add chat</button>
    </form>
  );
}

const AddChatFormRedux = reduxForm({ form : 'newChatForm'})(AddChatForm)

export default Dialogs;