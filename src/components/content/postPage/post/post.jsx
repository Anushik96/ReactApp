import React from 'react';
import '../../../../styles/styles.scss'
import style from './post.module.scss'
import image from '../../../../images/profilePic.jpg';


const Post = () =>{
    return(
        <div className={style.post}>
            <img src={image} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus commodi corporis dolores ea error fuga, id itaque laborum,
                maiores modi porro recusandae unde voluptate. Aliquam eligendi illum non veniam voluptatibus.</p>
        </div>
    )
}

export default Post;

