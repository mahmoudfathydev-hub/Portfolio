import React from "react";
import {
    FaCode,
    FaLightbulb,
    FaRocket,
    FaFlagCheckered
} from "react-icons/fa";
import "./Vision.scss";

export default function Vision() {
    const visionCards = [
        {
            icon: <FaLightbulb />,
            title: "User-Centered Experience",
            text: "Designing intuitive, smooth, and visually balanced interfaces with real users in mind."
        },
        {
            icon: <FaCode />,
            title: "Clean & Scalable Code",
            text: "Writing maintainable, scalable, and performance-focused frontend code."
        },
        {
            icon: <FaRocket />,
            title: "Continuous Growth",
            text: "Constantly learning new tools and best practices to stay competitive."
        }
    ];

    const goals2026 = [
        {
            icon: <FaCode />,
            title: "Master TypeScript",
            text: "Deep dive into TypeScript to build safer and enterprise-ready React applications."
        },
        {
            icon: <FaRocket />,
            title: "Large-Scale Project",
            text: "Build a production-level web application inspired by platforms like Apple or Amazon."
        },
        {
            icon: <FaFlagCheckered />,
            title: "Backend Expansion",
            text: "Start backend development to move towards a full-stack career path."
        }
    ];

    return (
        <section className="vision">
            <div className="container">

                <p className="section-title">My <span>Vision</span> </p>
                <div className="vision-cards">
                    {visionCards.map((card, i) => (
                        <div className="card" key={i}>
                            <div className="icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>

                <p className="section-title goals">Goals <span>2026</span> </p>
                <div className="vision-cards goals-grid">
                    {goals2026.map((goal, i) => (
                        <div className="card goal" key={i}>
                            <div className="icon">{goal.icon}</div>
                            <h3>{goal.title}</h3>
                            <p>{goal.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
