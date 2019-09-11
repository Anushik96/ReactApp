import React from 'react';
import '../../../styles/styles.scss'
import Post from "./post/post";
import image from "../../../images/profilePic.jpg";
import style from './postPage.module.scss'

const PostsPage = () => {
    const posts = [{
        id: '1',
        name: 'Jhon Doe',
        desc: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
        image: image
    },
        {
            id: '2',
            name: 'Eduard Snow',
            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
            image: image
        },
        {
            id: '3',
            name: 'Thom Doe',
            desc: 'Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            image: image
        },
    ]
    return (
        <div className={style.postPage}>
            <div className={style.posts}>
                <img src={image} alt=""/>
                <textarea name="postInput" id="" cols="50" rows="3"></textarea>
                <button className="main-btn">Publish</button>
            </div>
            { posts.map((post) => < Post key={post.id} name={post.name}  desc={post.desc} image={post.image}/> )}
        </div>
    )
}

export default PostsPage;