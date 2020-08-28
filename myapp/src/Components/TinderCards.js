import React, { useState } from "react";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Donald Trump",
      url: "",
    },
    {
      name: "Barack Obama",
      url: "",
    },
  ]);
  return (
    <div>
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
};

export default TinderCards;
