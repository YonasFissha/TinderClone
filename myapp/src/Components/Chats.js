import React, { useState } from "react";
import Chat from "./Chat";
const Chats = () => {
  const [message, setMessage] = useState([
    {
      name: "Sara",
      message: "Hey! How are you?",
      url:
        "https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg",
      timeStamp: "2 hours ago",
    },
    {
      name: "David",
      message: "When do you go to class?",
      url:
        "https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4",
      timeStamp: "3 minutes ago",
    },
    {
      name: "Antonio",
      message: "There you go!",
      url: "",
      timeStamp: "2 weeks ago",
    },
    {
      name: "Rabecca",
      message: "whats up!!",
      url: "",
      timeStamp: "3 days ago",
    },
  ]);
  return (
    <div>
      {message.map((m) => (
        <Chat
          key={m.name}
          name={m.name}
          message={m.message}
          url={m.url}
          timeStamp={m.timeStamp}
        />
      ))}
    </div>
  );
};

export default Chats;
