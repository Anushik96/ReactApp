import React from 'react';
import '../../../styles/styles.scss'
import messages from './dialog.module.scss'
import profilePic from '../../../images/profilePic.jpg';
import DialogItems from "./dialogItem/dialog-items";
import Messages from "./messages/messages";
import items from "./messages/messages.module.scss";

const Dialog = () => {
    const users = [{
            id: '1',
            image: profilePic,
            name: 'Jany Doe',
            message: 'Hello how are ...',
            msgCount:'3',
        },
        {
            id: '2',
            image: profilePic,
            name: 'Anny Fabacher',
            message: 'Hello whats up...',
            msgCount:'1'
        },
        {
            id: '3',
            image: profilePic,
            name: 'Jhon Snow',
            message: 'Hi guys...',
            msgCount:'2'
        },
    ];
    const dialogs = [{
            id: '1',
            message:'Hello how are you, please can you tell me what it is, I can not understand it',
            image: profilePic,
        },
        {
            id: '2',
            message:'Hi I am fine and you?',
            image: profilePic,
        },
        {
            id: '3',
            message:'Me too, how is going your job in the office?',
            image: profilePic,
        }
    ];
    return (
        <div className='main-container chatPage'>
            <div className={messages.chat}>
                <div className={messages.chat__list}>
                    { users.map((user) => <DialogItems id={user.id} name={user.name} message={user.message} image={user.image}  msgCount={user.msgCount}/> )}
                </div>
                <div className={messages.messages}>
                    { dialogs.map((dialog) =>  <Messages key={dialog.id} message={dialog.message} image={dialog.image}/> )}
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