import React from "react";

export default function ShowAwayScore({tigersScore}) {
    return (
        <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
        </div>
    )
};
