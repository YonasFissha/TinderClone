import React, { useState } from "react";
import "../Style/TinderCards.css";
import Footer from "./Footer";
import TinderCard from "react-tinder-card";
const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Ronaldo",
      url:
        "https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg",
    },
    {
      name: "Bale",
      url:
        "https://www.theeconomyjournal.eu/images/showid2/2900931?w=1200&zc=4",
    },
  ]);
  return (
    <div className="TinderCard__Container">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default TinderCards;
