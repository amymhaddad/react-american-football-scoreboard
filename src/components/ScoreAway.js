import React from 'react';

export default function ScoreAway({awayScore, setAwayScore}) {
//extract scores (7 and 3) as constants

return (
    <div className="container">
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
        </div>

        <section className="buttons">
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