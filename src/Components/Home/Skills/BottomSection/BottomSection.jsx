import React, { useState, useEffect } from 'react'
import { TbBrandRedux } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import './BottomSection.scss';
import Skills from "../../../../images/Skills.png"

export default function BottomSection() {
    const text = [
        { id: 1, name: "Redux", text: "I can use Redux Toolkit, but I'm still trying to learn and master it.", icon: <TbBrandRedux /> },
        { id: 2, name: "3D Animations", text: "I can work with different libraries like React Bits to make the website 3D using other libraries like Three.js", icon: <MdAnimation /> },
        { id: 3, name: "TypeScript", text: "I am learning TypeScript now to enhance my skills.", icon: <SiTypescript /> },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % text.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [text.length]);

    return (
        <div className="BottomSection">
            <div className="container">
                <div className="sec1">
                    <div className="skill-card">
                        <div className="skill-header">
                            <span className="icon">{text[currentIndex].icon}</span>
                            <span className="name">{text[currentIndex].name}</span>
                        </div>
                        <p className="skill-text">{text[currentIndex].text}</p>
                    </div>
                </div>
                <div className="sec2">
                    <img src={Skills} alt="Skills" />
                </div>
            </div>
        </div>
    );
}
