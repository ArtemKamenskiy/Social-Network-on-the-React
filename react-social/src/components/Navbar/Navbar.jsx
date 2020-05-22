import React from 'react';
import navClasses from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={navClasses.nav}>
            <ul>
                <li className={navClasses.userProfile}><a>Profile</a></li>
                <li className={navClasses.messages}><a>Messages</a></li>
                <li className={navClasses.news}><a>News</a></li>
                <li className={navClasses.music}><a>Music</a></li>
                <li className={navClasses.settings}><a>Settings</a></li>
            </ul>
        </div>
    )
};

export default Navbar;
