import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage}
    dialogsPage={state.dialogsPage}/>)
}

export default DialogsContainer