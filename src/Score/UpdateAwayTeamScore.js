import React from "react";

export default function UpdateAwayTeamScore({tigersScore, setTigersScore}) {
    return (
        <div className="awayButtons">
            <button 
                className="awayButtons__touchdown"
                onClick = {() => setTigersScore(tigersScore += 7)}>
                Away Touchdown
            </button>

            <button 
                className="awayButtons__fieldGoal"
                onClick={() => setTigersScore(tigersScore += 3)}>
                Away Field Goal
            </button>
        </div>
    )
};
