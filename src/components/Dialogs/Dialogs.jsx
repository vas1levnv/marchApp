import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Navigate } from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map( (d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages
        .map( (m) => <Message message={m.message} key={m.id}/>)
    let newMessageBody = React.createRef()

    let onSendMessageChange = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }



    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onNewMessageChange} ref={newMessageBody}
                    value={props.dialogsPage.newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageChange}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs