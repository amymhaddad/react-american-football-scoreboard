import React from "react";

export default function ShowHomeTeamScore({lionsScore, setLionsScore}){
    return (
        <div className="homeButtons">
            <button 
                className="homeButtons__touchdown" 
                onClick={() => setLionsScore(lionsScore += 7)}>
                Home Touchdown
            </button>

            <button 
                className="homeButtons__fieldGoal"
                onClick={() => setLionsScore(lionsScore += 3)}>
                Home Field Goal
                </button>
            </div>
        )
};
