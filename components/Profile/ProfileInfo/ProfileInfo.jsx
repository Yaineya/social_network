import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.image}
          src="http://avante.biz/wp-content/uploads/Awesome-Beach-Backgrounds/Awesome-Beach-Backgrounds-003.jpg"
        />
      </div>

      <div className={s.descriptionBlock}>Описание</div>
    </div>
  );
};

export default ProfileInfo;
