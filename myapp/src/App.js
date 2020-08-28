import React from "react";
import Header from "./Components/Header";

import TinderCards from "./Components/TinderCards";
import Chats from "./Components/Chats";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <TinderCards></TinderCards>
          </Route>
          <Route exact path="/Chats">
            <Header WhereTo="/"></Header>
            <Chats></Chats>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
