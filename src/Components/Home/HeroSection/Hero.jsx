import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Button from "../../UI/Button/Button";
import Magnet from "../../../Magnet";
import imghero from '../../../images/character1.png'
import colordots from '../../../images/colordots.png'
import { Link } from "react-router-dom";

export default function Hero() {
    const words = ["Mahmoud Fathy", "Front-End Developer", "Web Animator", "Vibe Manager"];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenWords = 2000;

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timer;
        if (!isDeleting && charIndex < words[wordIndex].length) {
            timer = setTimeout(() => {
                setText((prev) => prev + words[wordIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        } else if (!isDeleting && charIndex === words[wordIndex].length) {
            timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && charIndex > 0) {
            timer = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, deletingSpeed);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <section id="home" className="hero">
            <img src={colordots} alt="colordots" className="colordots" />
            <div className="container">
                <div className="text-section">
                    <h2 className="hero-title">
                        Hi, I am <span className="animated-text">{text}</span>
                    </h2>

                    <p className="first-p fade-p">
                        I craft interactive, responsive, and visually stunning websites
                        using React and modern web technologies.
                    </p>

                    <p className="second-p fade-p">
                        Passionate about clean code, smooth animations, and great user
                        experiences.
                    </p>
                    <div className="btn-hero">
                        <Link to="/projects">
                            <Button name="View Projects" className="btn-left" />
                        </Link>

                        <Magnet padding={100} magnetStrength={3}>
                            <Button
                                name="Download CV"
                                className="btn-cv"
                                onClick={() => window.open(
                                    "https://drive.google.com/file/d/154V0hL5Ip007UXSYUo_0uahY5SU6S0kH/view?usp=sharing",
                                    "_blank"
                                )}
                            />

                        </Magnet>
                    </div>
                </div>
                <div className="img-section">
                    <div className="circle1">
                        <img src={imghero} alt="imghero" />
                    </div>
                </div>
            </div>
        </section>
    );
}
