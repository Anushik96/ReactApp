import React from 'react'
import items from './messages.module.scss';
import profilePic from "../../../../images/profilePic.jpg";

const Messages = (props)=>{
    return(
            <div className={items.messages__content}>
                <img src={props.image} alt=""/>
                <p className={items.sendMsg}>{props.message}</p>
            </div>

    )
}

export default Messages;