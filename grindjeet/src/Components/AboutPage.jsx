import React from "react";
import photo from "../assets/about.jpg";

export default function About(){
    return <div className="about">
        <div className="aboutcontent">
            <h1>Ace Your Placements</h1>
            <h1 className="strategy">Through Strategic</h1>
            <h1><span>Revision.</span></h1>
            <p>GrindBook makes strategic revision easy. Log your learning materials,<br /> track your progress, and identify areas needing focus to confidently <br />tackle placement  challenges and achieve success.</p>
            <div className="buttons1">
                <button className="log">Start Logging</button>
                <button className="rev">See reviews</button>
            </div>
        </div>
        <img src={photo} />
    </div>
}