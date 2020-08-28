import React from "react";
import "../Style/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icons" fontSize="large" />
      </IconButton>

      <img
        className="header__image"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt=""
      />
      <IconButton>
        <ForumIcon className="header__icons" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;