import React from 'react';
import '../../../styles/styles.scss'
import Post from "./post/post";
import image from "../../../images/profilePic.jpg";
import style from './postPage.module.scss'

const PostsPage = (props) => {
    let news  = React.createRef();
    let addNewPost = () =>{
        alert(props.addNewPost(news));
    }
    return (
        <div className={style.postPage}>
            <div className={style.posts}>
                <img src={image} alt=""/>
                <textarea name="postInput" ref={news} id="texts" cols="50" rows="3"></textarea>
                <button onClick={addNewPost} className="main-btn">Publish</button>
            </div>
            {/*<h1>{news.current.value == true ? news.current.value: {}}</h1>*/}
            { props.posts.map((post) => < Post key={post.id} name={post.name}  desc={post.desc} image={post.image}/> )}
        </div>
    )
}

export default PostsPage;