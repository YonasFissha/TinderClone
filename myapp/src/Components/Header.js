import React from "react";
import "../Style/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
const Header = ({ WhereTo }) => {
  const history = useHistory();
  return (
    <div className="header">
      {WhereTo ? (
        <IconButton onClick={() => history.replace(WhereTo)}>
          <ArrowBackIosIcon className="header__icons" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icons" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__image"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt=""
        />
      </Link>

      <Link exact to="/Chats">
        <IconButton>
          <ForumIcon className="header__icons" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
