import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ShowHomeScore from "./Score/ShowHomeScore";
import UpdateHomeTeamScore from "./Score/UpdateHomeTeamScore";
import UpdateAwayTeamScore from "./Score/UpdateAwayTeamScore";
import ShowAwayScore from "./Score/ShowAwayScore";
import Timer from "./Scoreboard/Timer";
import UpdateQuarter from ".//Scoreboard/UpdateQuarter";

function App() {
  let [lionsScore, setLionsScore] = useState(0);
  let [tigersScore, setTigersScore] = useState(0);
  let [quarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        
        <div className="topRow">
          <ShowHomeScore lionsScore={lionsScore}/>
          <Timer />
          <ShowAwayScore tigersScore={tigersScore} />
        </div>

        <BottomRow quarter={quarter}/>      
      </section>
      
      <section className="buttons">
        <UpdateHomeTeamScore lionsScore={lionsScore} setLionsScore={setLionsScore} />
        <UpdateAwayTeamScore tigersScore={tigersScore} setTigersScore={setTigersScore} /> 
        <UpdateQuarter quarter={quarter} setQuarter={setQuarter} />
      </section>
    </div>
  );
}

export default App;
