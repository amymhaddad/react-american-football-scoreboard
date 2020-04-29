import React, { useState } from "react";
import ScoreHome from "./ScoreHome";
import ScoreAway from "./ScoreAway";
import BottomRow from "./BottomRow";
import TeamScore from "./TeamScore";


//make a general component called TeamScore compoentnt that I will use 2x -- one for home and one for away -- and pass in the correct data
{/* <TeamScore className="home__score" teamName = 'Home' teamScore = {homeScore} setScore={setHomeScore}/>   */}
//Define it once but call it twice. So I have a single JS file and I'll render it 2x
export default function ScoreBoard() {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);



    return (

        <div className="container">
          <section className="scoreboard">
            <div className="topRow">

              <TeamScore className="home__score" teamName="Lions" score={homeScore} setScore={setHomeScore} />

              {/* <ScoreHome className="home__score" homeScore = {homeScore} setHomeScore={setHomeScore}/>   */}
              
              <div className="timer">00:03</div>
              <ScoreAway className="away_score" awayScore={awayScore} setAwayScore={setAwayScore}/>
          </div>
          <BottomRow />
        </section>
      </div>
    )
}

