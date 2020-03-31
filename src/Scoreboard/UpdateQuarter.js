import React from "react";

export default function UpdateQuarter({quarter, setQuarter}) {
    return (
        <button 
            className="quarter"
            onClick={() => setQuarter(quarter += 1)}>
            Update Quarter
        </button>
    )
};