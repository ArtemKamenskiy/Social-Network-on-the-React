import React from 'react';
import AllPosts from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let newPostArr = props.posts.map( (post) => <Post likes={post.likes} text={post.text}/>);
    return (
        <div className={AllPosts.Posts}>
            {newPostArr}
        </div>
    )
};
export default Posts;
