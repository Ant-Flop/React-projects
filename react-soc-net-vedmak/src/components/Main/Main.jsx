import React from "react";
import main from './Main.module.css'
import Profile_photo from '../../img/profile-photo.jpg'
import Avatar from '../../img/vedmak.jpg'
import Thomas from '../../img/thomas.jpg'
import Kristy from '../../img/kristy.jpg'


const Main = () => {
    return (
        <main>
            <div className={main.ProfilePhoto}>
                <a href={"#"}>
                    <img src={Profile_photo} alt={"img"}/>
                </a>
            </div>
            <div className={main.ProfileInfo + ' ' + main.Avatar}>
                <a href={"#"}>
                    <img src={Avatar} alt={"img"}/>
                </a>
            </div>
            <div className={main.ProfileInfo} id={"Biography"}>
                <ul>
                    <li>
                        <h3>Vedmak Ivanov</h3>
                    </li>
                    <li>Date of Birth: 7 february</li>
                    <li>City: London</li>
                    <li>Education: University</li>
                    <li>Web-site: vedmak.net</li>
                </ul>
            </div>
            <div className={main.MyPosts}>
                <div>
                    <h3>My Posts</h3>
                </div>
                <div>
                    <textarea placeholder={"Comment"}/>
                </div>
                <div>
                    <a href={"#"}>Submit</a>
                </div>
            </div>
            <div className={main.CommentsField}>
                <ul>
                    <li>
                        <a href={"#"}>
                            <img src={Thomas} alt={"img"}/>
                            <div>Thomas</div>
                        </a>
                        <div className={main.Comment}>Hello Vedmak. How are u?</div>
                    </li>
                    <li>
                        <a href={"#"}><img src={Kristy} alt={"img"}/>
                            <div>Kristy</div>
                        </a>
                        <div className={main.Comment}>Hey man what`s up?</div>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Main;