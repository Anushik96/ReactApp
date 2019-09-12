import React from 'react';
import '../../../styles/styles.scss'
import Post from "./post/post";
import image from "../../../images/profilePic.jpg";
import style from './postPage.module.scss'

const PostsPage = (props) => {
    return (
        <div className={style.postPage}>
            <div className={style.posts}>
                <img src={image} alt=""/>
                <textarea name="postInput" id="" cols="50" rows="3"></textarea>
                <button className="main-btn">Publish</button>
            </div>
            { props.posts.map((post) => < Post key={post.id} name={post.name}  desc={post.desc} image={post.image}/> )}
        </div>
    )
}

export default PostsPage;