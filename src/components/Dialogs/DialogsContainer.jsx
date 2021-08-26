import React, {Component} from 'react'
import Dialogs from './Dialogs'
import { addChat } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesPage.dialogsData,
    newChatText: state.messagesPage.newChatText,
    messagesData: state.messagesPage.messagesData,
  }
}

export default compose(
  connect(mapStateToProps, { addChat }),
  withAuthRedirect
)(Dialogs);