import React from "react";
import nav from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <div className={nav.item}><NavLink to={"/profiles"} activeClassName={nav.activeLink}>Profile</NavLink></div>
            <div className={nav.item}><NavLink to={"/dialogs"} activeClassName={nav.activeLink}>Messages</NavLink></div>
            <div className={nav.item}><NavLink to={"/news"} activeClassName={nav.activeLink}>News</NavLink></div>
            <div className={nav.item}><NavLink to={"/music"} activeClassName={nav.activeLink}>Music</NavLink></div>
        </nav>
    )
}

export default Navbar;