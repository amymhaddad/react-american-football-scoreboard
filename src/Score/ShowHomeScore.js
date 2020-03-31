import React from "react";

export default function ShowHomeScore({lionsScore}){    
    return (
      <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">{lionsScore}</div>     
      </div>
     );
}