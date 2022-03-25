import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(<div className={s.message}>{props.message}</div>)
}


const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Sveta'},
        {id:4, name: 'Sveta'},
        {id:5, name: 'Viktor'},
        {id:6, name: 'Valera'},

    ]

    let messages = [
        {id:1, message: 'hi'},
        {id:2, message: 'how are you?'},
        {id:3, message: 'yo'},
        {id:4, message: 'yo'},
        {id:5, message: 'yo'},
    ]

    let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map( (m) => <Message message={m.message}/>)

    return (<div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs