import React from 'react';
import '../../../styles/styles.scss'
import messages from './dialog.module.scss'
import profilePic from '../../../images/profilePic.jpg';
import DialogItems from "./dialogItem/dialog-items";
import Messages from "./messages/messages";
import items from "./messages/messages.module.scss";

const Dialog = (props) => {

    return (
        <div className='main-container chatPage'>
            <div className={messages.chat}>
                <div className={messages.chat__list}>
                    { props.users.map((user) => <DialogItems id={user.id}
                                                             name={user.name}
                                                             message={user.message}
                                                             image={user.image}  msgCount={user.msgCount}/> )}
                </div>
                <div className={messages.messages}>
                    { props.dialogs.map((dialog) =>  <Messages id={dialog.id} message={dialog.message} image={dialog.image} status={dialog.status}/> )}
                    <div className={messages.send}>
                        <textarea name="" id=""  rows="2"></textarea>
                        <button className={messages.send_btn}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog;