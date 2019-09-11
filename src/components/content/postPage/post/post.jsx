import React from 'react';
import '../../../../styles/styles.scss'
import style from './post.module.scss'
// import image from '../../../../images/profilePic.jpg';


const Post = (props) => {
    return (
        <div className={style.post}>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <div>
                <p className='font-weight-700'>{props.name}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;

