import React from 'react';

export default function ScoreHome({homeScore}) {


    return (
        <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>

          <div className="home__score">{homeScore}</div>
          </div>
        </div>
    
    )
}