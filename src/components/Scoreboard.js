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
            <ScoreHome className="home__score" homeScore = {homeScore}/>  
            
    
            <div className="timer">00:03</div>
            <ScoreAway className="away_score" awayScore={awayScore}/>
  
  
          </div>
  
          <BottomRow />
        </section>



  
        <section className="buttons">
  
          <div className="homeButtons">
        
            <button 
              className="homeButtons__touchdown"
              onClick= {() => setHomeScore(homeScore + 7) }
              >Home Touchdown</button>
  
  
            <button 
              className="homeButtons__fieldGoal"
              onClick={() =>setHomeScore(homeScore +3)}
              >Home Field Goal</button>
          </div>
  
  
          <div className="awayButtons">
            <button 
              className="awayButtons__touchdown"
              onClick={() =>setAwayScore(awayScore +7)}
              >Away Touchdown</button>
  
            <button 
              className="awayButtons__fieldGoal"
              onClick={() =>setAwayScore(awayScore +3)} 
            >Away Field Goal</button>
  
          </div>
        </section>
      </div>

    )

}

