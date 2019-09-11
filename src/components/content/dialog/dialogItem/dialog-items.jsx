import React from 'react'
import items from './dialog-items.module.scss';
import profilePic from "../../../../images/profilePic.jpg";

const DialogItems = (props)=>{

    return(
        <div className={items.user}>
            <div>
                <img  src={props.image} alt=""/>
            </div>
            <div className={items.user__info}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
            </div>
            <h4 className={items.messages_count}>{props.msgCount}</h4>
        </div>

    )
}

export default DialogItems;