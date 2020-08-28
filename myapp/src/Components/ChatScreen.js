import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../Style/ChatScreen.css";
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Bety",
      message: "Hey! Yoni",
      url:
        "https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4",
    },
    {
      message: "Hey! Bety, sup!",
      url: "",
    },
    {
      name: "Bety",
      message: "I am good. How are you?",
      url:
        "https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4",
    },
    {
      message: "Hey! All good here",
      url: "",
    },
  ]);
  return (
    <div className="ChatScreen">
      <p className="ChatScreen_title">YOU MATCHED WITH BETY ON 09/09/2020</p>
      {messages.map((message) =>
        message.name ? (
          <div className="ChatScreen_messages">
            <Avatar className="ChatScreen_image" src={message.url}></Avatar>
            <p className="ChatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="ChatScreen_messages">
            <p className="ChatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form action="" className="ChatScreen_Form">
        <input
          type="text"
          className="ChatScreen_Input"
          placeholder="Type a message"
        />
        <button className="ChatScreen_Button">Send</button>
      </form>
    </div>
  );
};

export default ChatScreen;
