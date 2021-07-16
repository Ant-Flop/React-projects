import React from "react";
import header from './Header.module.css'
import Logo from "../../img/logo.png"


const Header = () => {
    return (
        <header>
            <div className={header.header}>
                <a href={"#"}>
                    <img src={Logo} alt={"logo"}/>
                </a>
            </div>
            <div className={header.header + ' ' + header.exit}>
                <a href={"#"}>Vedmak Ivanov</a>
            </div>
        </header>
    );
}

export default Header;