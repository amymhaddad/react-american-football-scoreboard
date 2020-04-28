import React, {useState, useEffect } from "react";
import ScoreHome from "./ScoreHome";
import ScoreAway from "./ScoreAway";
import BottomRow from "./BottomRow";


export default function ScoreBoard() {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [quarter, setQuarter] = useState(1);

    return (

        <div className="container">
      
          <section className="scoreboard">
            

            <div className="topRow">
            <ScoreHome className="home__score" homeScore = {homeScore} setHomeScore={setHomeScore}/>  
            
    
            <div className="timer">00:03</div>
            <ScoreAway className="away_score" awayScore={awayScore} setAwayScore={setAwayScore}/>

          </div>
  
          <BottomRow />
        </section>

      </div>

    )

}

