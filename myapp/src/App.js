import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TinderCards from "./Components/TinderCards";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <TinderCards />
      <Footer />
    </div>
  );
}

export default App;
