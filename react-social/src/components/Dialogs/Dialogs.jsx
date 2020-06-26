import React from 'react';
import dialogStyle from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import userImg from '../../assets/images/profileUser.svg'

const SendMessage = (props) => {
    return (
        <div className={dialogStyle.sendMessage}>
            <input/>
            <button>Send</button>
        </div>
    )
};

const Dialog = (props) => {
    let link = '/dialogs/' + props.id;
    return (
        <li>
            <NavLink to={link}>
                <div className={dialogStyle.userImg}>
                    <img src={userImg} alt='user-image'/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </li>
    )
};

const Dialogs = (props) => {
    let userArr = props.dialogs.map((user) => <Dialog key={user.id} name={user.name} id={user.id}/>);
    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.users}>
                <ul>
                    {userArr}
                </ul>
            </div>
            <div className={dialogStyle.dialogsContainer}>
                <div className={dialogStyle.userDialogs}>
                    <Message messages={props.messages}/>
                </div>
                <div>
                    <SendMessage/>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;
