import React from 'react';
import './Profile.css';
import Posts from "./Posts/Posts";
import UserProfile from "./UserProfile/User-profile";

const Profile = (props) => {
    let postElem = React.createRef();
    let clearInput = () => {postElem.current.value = ""};
    let addPost = () => {
        let valueInput = postElem.current.value;
        props.newPost(valueInput, 5);
        clearInput();
    };
    let infoArr = props.info.map(info => <UserProfile name={info.name} city={info.city} age={info.age}/>);
    return (
        <div className='profile'>
            {infoArr}
            <div className='newPost'>
                <input ref={postElem}/>
                <button onClick={addPost}>Click</button>
            </div>
            <Posts posts={props.posts}/>
        </div>

    )
};
 export default Profile;
