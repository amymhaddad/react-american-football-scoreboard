import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TeamScore from "./TeamScore";

export default function ScoreBoard() {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    return (

        <div className="container">
          <section className="scoreboard">
            <div className="topRow">
              <TeamScore className="home__score" teamName="Lions" score={homeScore} setScore={setHomeScore} />
              <div className="timer">00:03</div>
              <TeamScore className="away__score" teamName="Tigers" score={awayScore} setScore={setAwayScore} />
          </div>
          <BottomRow />
        </section>
      </div>
    )
}

