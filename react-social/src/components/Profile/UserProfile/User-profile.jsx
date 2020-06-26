import React from 'react';
import UserStyle from './User-profile.module.css';
import User from '../../../assets/images/profile.svg'

let UserProfile = (props) => {
    return (
        <div className={UserStyle.user}>
            <div className={UserStyle.userImg}>
                <img src={User} alt='user-image'/>
            </div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>City: {props.city}</li>
            </ul>
        </div>
    )
};
export default UserProfile;
