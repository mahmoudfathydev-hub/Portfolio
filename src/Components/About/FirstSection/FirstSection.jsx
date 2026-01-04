import React from 'react';
import heroabout from "../../../images/heroabout.png"
import "./FirstSection.scss"


export default function FirstSection() {
    return (
        <div className="first-section">
            <div className="bg-circles">
                <span className="circle circle-1"></span>
                <span className="circle circle-2"></span>
            </div>
            <div className="container">
                <div className="who-am-i">
                    <h2>Who Am I?</h2>

                    <p className="intro">
                        I’m Mahmoud Mohammed Fathy <br />
                        <span>A Front-End Developer in the making</span>
                    </p>

                    <p>
                        I’m a first-year Geography student with a strong passion for web development.
                        While my academic path is different, my focus is clear — building modern,
                        interactive, and user-focused web experiences using React and modern tools.
                    </p>

                    <p className="belief">
                        I believe skills are built through
                        <span> practice</span>, <span> curiosity</span>, and <span> consistency</span>
                        — not just titles.
                    </p>
                </div>

                <div className="img-section">
                    <img src={heroabout} alt="heroabout" />
                </div>
            </div>
        </div>
    )
}
