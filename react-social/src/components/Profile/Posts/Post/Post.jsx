import React from 'react';
import PostStyle from './Post.module.css'
import userImg from '../../../../assets/images/profileUser.svg'
import like from '../../../../assets/images/heart.svg'

const Post = (props) => {
    let likes = React.createRef();
    return (
        <div className={PostStyle.Post}>
            <div className={PostStyle.UserImage}>
                <img src={userImg} alt='user-image'/>
            </div>
            <div className={PostStyle.postContent}>
                <div className={PostStyle.text}>
                    {props.text}
                </div>
                <div className={PostStyle.likes}>
                    <img src={like} alt='like'/>
                    <div ref={likes}>
                        {props.likes}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Post;
