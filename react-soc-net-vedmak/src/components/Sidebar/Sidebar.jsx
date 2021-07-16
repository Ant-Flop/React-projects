import React from "react";
import sidebar from './Sidebar.module.css'
import Mike from '../../img/mike.jpg'
import Thomas from '../../img/thomas.jpg'
import Kristy from '../../img/kristy.jpg'

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li><a href={"#"}>Profile</a></li>
                <li><a href={"#"}>Message</a></li>
                <li><a href={"#"}>News</a></li>
                <li><a href={"#"}>Music</a></li>
                <li><a href={"#"}>Settings</a></li>
            </ul>
            <div className={sidebar.Friends}>
                <div className={sidebar.AllFriends}>
                    <ul>
                        <div>
                            <h3>Friends</h3>
                        </div>
                        <li>
                            <a href={"#"}>
                                <img src={Mike} alt={"img"}/>
                                <div>Mike</div>
                            </a>
                        </li>
                        <li>
                            <a href={"#"}>
                                <img src={Thomas} alt={"img"}/>
                                <div>Thomas</div>
                            </a>
                        </li>
                        <li>
                            <a href={"#"}>
                                <img src={Kristy} alt={"img"}/>
                                <div>Kristy</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={sidebar.Online}>
                    <ul>
                        <div>
                            <h3>Online</h3>
                        </div>
                        <li>
                            <a href={"#"}>
                                <img src={Thomas} alt={"img"}/>
                                <div>Thomas</div>
                            </a>
                        </li>
                        <li>
                            <a href={"#"}>
                                <img src={Kristy} alt={"img"}/>
                                <div>Kristy</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
