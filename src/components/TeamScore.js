import React from 'react';

export default function TeamScore({className, teamName, score, setScore}) {
    const touchDown = 7;
    const fieldGoal = 3;

    return (
        <div className="container">
            <div className="home">
                <h2 className="home__name">{teamName}</h2>
                <div className={className}>{score}</div>
            </div>

            <section className="buttons">
                <div className="homeButtons">
                    <button 
                        className="homeButtons__touchdown"
                        onClick= {() => setScore(score + touchDown) }
                        >Home Touchdown</button>
                    <button 
                        className="homeButtons__fieldGoal"
                        onClick={() => setScore(score + fieldGoal)}
                        >Home Field Goal</button>
                </div>
            </section>
    </div>
    )
}