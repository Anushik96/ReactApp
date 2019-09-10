import React from 'react';
import '../../../styles/styles.scss'
import Post from "./post/post";
import image from "../../../images/profilePic.jpg";
import style from './postPage.module.scss'

const PostsPage = () => {
    return (
        <div className={style.postPage}>
            <div className={style.posts}>
                <img src={image} alt=""/>
                <textarea name="postInput" id="" cols="35" rows="3"></textarea>
                <button className="main-btn">Publish</button>
            </div>
            < Post />
        </div>
    )
}

export default PostsPage;