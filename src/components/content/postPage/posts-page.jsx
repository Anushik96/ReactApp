import React from 'react';
import '../../../styles/styles.scss'
import Post from "./post/post";
import image from "../../../images/profilePic.jpg";
import style from './postPage.module.scss'

const PostsPage = (props) => {
    let news  = React.createRef();
    // let value = document.getElementById('texts').value;
    let helllo = () =>{
        alert(news.current.value)
    }
    return (
        <div className={style.postPage}>
            <div className={style.posts}>
                <img src={image} alt=""/>
                <textarea name="postInput" ref={news} id="texts" cols="50" rows="3"></textarea>
                <button onClick={helllo} className="main-btn">Publish</button>
            </div>
            { props.posts.map((post) => < Post key={post.id} name={post.name}  desc={post.desc} image={post.image}/> )}
        </div>
    )
}

export default PostsPage;