import Button from '@/Components/UI/Button/Button'
import React from 'react'
import five from "../../../images/Handcoding.png"
import "./FifthSection.scss"

export default function FifthSection() {
    return (
        <div className="fifth-section">
            <div className="container">
                <div className="title-section">
                    <p>Why <span>Me?</span> </p>
                </div>
                <div className="content">
                    <div className="text-section">
                        <div className="sec1">
                            <p>
                                I work with <span className="highlight">speed</span> and <span className="highlight">efficiency</span>,
                                executing tasks as quickly as possible while maintaining the <span className="highlight">highest quality</span>.
                            </p>
                            <p>
                                I leverage <span className="highlight">AI tools</span> to enhance my workflow,
                                and I have a genuine <span className="highlight">love for learning</span>
                                and <span className="highlight">discovering new things</span>.
                            </p>
                            <p>
                                My journey is driven by a <span className="highlight">passion for growth</span>,
                                gaining <span className="highlight">hands-on experience</span>, and a <span className="highlight">high level of ambition</span>
                                to continuously improve and excel as a developer.
                            </p>
                        </div>
                        <div className="sec2">
                            <Button name="Contact Me" />
                        </div>
                    </div>
                    <div className="img-section">
                        <img src={five} alt="Handcoding Illustration" />
                    </div>
                </div>
            </div>
        </div>
    )
}
