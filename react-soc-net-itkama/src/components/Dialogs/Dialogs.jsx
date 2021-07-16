import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                                                    name={dialog.name}/>);
    let messagesElements = props.state.dialogsPage.messages.map(message => <Message message={message.message}/>);
    return (
        <div className={d.dialogs}>
            <div className={d['dialogs-items']}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;