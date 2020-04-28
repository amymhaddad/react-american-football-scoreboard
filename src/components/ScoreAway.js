import React from 'react';

export default function ScoreAway({awayScore}) {


    return (
         
        <div className="topRow">

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
          
        </div>

    
    )
}