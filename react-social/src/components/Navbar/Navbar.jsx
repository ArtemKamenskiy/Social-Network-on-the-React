import React from 'react';
import navClasses from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={navClasses.nav}>
            <ul>
                <li>
                    <NavLink to='/profile' className={navClasses.userProfile}
                             activeClassName={navClasses.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={navClasses.messages}
                             activeClassName={navClasses.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={navClasses.news} activeClassName={navClasses.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className={navClasses.music}
                             activeClassName={navClasses.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={navClasses.settings}
                             activeClassName={navClasses.active}>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;
