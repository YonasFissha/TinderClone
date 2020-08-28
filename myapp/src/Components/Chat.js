import React from "react";
import "../Style/Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
const Chat = ({ name, message, url, timeStamp }) => {
  return (
    <Link to={`Chat/${name}`}>
      <div className="Chat">
        <Avatar src={url} className="Chat_Image" />
        <div className="Chat__Detail">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <p className="Chat__timeStamp">{timeStamp}</p>
      </div>
    </Link>
  );
};
export default Chat;
