import React from 'react'
import items from './messages.module.scss';
import profilePic from "../../../../images/profilePic.jpg";

const Messages = ()=>{
    return(
            <div className={items.messages__content}>
                <img src={profilePic} alt=""/>
                <p className={items.sendMsg}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi asperiores culpa in labore odio.</p>
            </div>

    )
}

export default Messages;