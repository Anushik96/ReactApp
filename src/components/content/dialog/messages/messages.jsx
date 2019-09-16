import React from 'react'
import items from './messages.module.scss';
import profilePic from "../../../../images/profilePic.jpg";

const Messages = (props) => {
    return (
        <div className={items.messages__content} style={props.status == 'get' ? { justifyContent : 'flex-end' } : {}}>
            {props.status == 'send' &&
            <img src={props.image} alt=""/>}
            <p className={items.sendMsg}>{props.message}</p>
            {props.status == 'get' &&
            <img src={props.image} alt=""/>}
        </div>
    );
};

export default Messages;