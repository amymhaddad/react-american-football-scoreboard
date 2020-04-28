import React from 'react';

export default function ScoreHome({homeScore, setHomeScore}) {

    return (
        <div className="container">
            <div className="home">
                <h2 className="home__name">Lions</h2>
                <div className="home__score">{homeScore}</div>
            </div>

            <section className="buttons">
                <div className="homeButtons">
                    <button 
                        className="homeButtons__touchdown"
                        onClick= {() => setHomeScore(homeScore + 7) }
                        >Home Touchdown</button>
                    <button 
                        className="homeButtons__fieldGoal"
                        onClick={() => setHomeScore(homeScore +3)}
                        >Home Field Goal</button>
                </div>
            </section>
        </div>
    )
}

