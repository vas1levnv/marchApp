import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return (<StoreContext.Consumer>
        {(store) => {
                let state = store.getState()

                let sendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                let updateNewMessageBody = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage}
                         dialogsPage={state.dialogsPage}/>
            }
        }
        </StoreContext.Consumer>)
}

export default DialogsContainer