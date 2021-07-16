import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.background}>
                <img src={"https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg"}
                     alt={"profile-image"}/>
            </div>
            <div className={style.info}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;