import React from 'react';
import AllPosts from './Posts.module.css';
import Post from "./Post/Post";
const Posts = () => {
    return (
        <div className={AllPosts.Posts}>
            <Post name='User1' age='20'/>
            <Post name='User2' age='30'/>
        </div>
    )
};
export default Posts;
