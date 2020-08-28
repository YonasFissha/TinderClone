import React from "react";
import "../Style/Chat.css";
import Avatar from "@material-ui/core/Avatar";
const Chat = ({ name, message, url, timeStamp }) => {
  return (
    <div className="Chat">
      <Avatar src={url} className="Chat_Image" />
      <div className="Chat__Detail">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className="Chat__timeStamp">{timeStamp}</p>
    </div>
  );
};
export default Chat;
