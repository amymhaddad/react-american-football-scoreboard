 
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ScoreBoard from "./components/Scoreboard";


function App() {
  return (
    <div>
      <Route path="/scoreboard" component={ScoreBoard}/>
    </div>
  );
}

export default App;
