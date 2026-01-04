import React from "react";
import "./RightSection.scss";

export default function RightSection({ hoveredSkill }) {
    const skillInfo = {
        HTML: {
            title: "HTML",
            description:
                "I have sufficient experience to write the structure for any project, regardless of its size, using HTML. I have worked on over 150 HTML projects.",
            numbers: ["150"],
            keywords: ["structure", "project"],
        },
        CSS: {
            title: "CSS",
            description:
                "I've personally written over 20,000 CSS code snippets, and I think it's much more. I'm very proficient with design tools, and I can also divide projects into simple parts to easily manage them across different screen sizes.",
            numbers: ["20000"],
            keywords: ["proficient", "projects"],
        },
        SCSS: {
            title: "SCSS",
            description:
                "Through 11 real-world projects, I have gained strong expertise in SCSS, including mixins, nesting, and variables.",
            numbers: ["11"],
            keywords: ["expertise", "mixins", "nesting", "variables"],
        },
        Tailwind: {
            title: "Tailwind CSS",
            description:
                "I've seen some of Tailwind, but I prefer Pure CSS because it gives me complete control over the project, and I can achieve speed, efficiency, and productivity using both Pure CSS and SCSS.",
            numbers: [],
            keywords: ["control", "speed", "efficiency", "productivity"],
        },
        "ES6+": {
            title: "JavaScript (ES6+)",
            description:
                "I learned the basics of JavaScript and got an idea of older versions to understand ES6+ such as switching from var to let, const and much more",
            numbers: [],
            keywords: ["ES6+", "JavaScript"],
        },
        Async: {
            title: "Asynchronous JS",
            description:
                "I have implemented asynchronous operations in over 10 projects, ensuring smooth and efficient data handling.",
            numbers: ["10"],
            keywords: ["asynchronous", "smooth", "efficient"],
        },
        Logic: {
            title: "JavaScript Logic",
            description:
                "I understood the logic and way of thinking in large projects, and the most commonly used things in our field, such as research and filtering.",
            numbers: [],
            keywords: ["logic", "research", "filtering"],
        },
        DOM: {
            title: "DOM Manipulation",
            description:
                "I have handled DOM updates and event handling in over 11 projects, making dynamic web pages fully interactive and responsive.",
            numbers: ["11"],
            keywords: ["DOM", "interactive", "responsive"],
        },
        Hooks: {
            title: "React Hooks",
            description:
                "I have implemented React Hooks in more than 32 projects, enabling reusable functional components with controlled state and effects.",
            numbers: ["32"],
            keywords: ["Hooks", "reusable", "state", "effects"],
        },
        State: {
            title: "State Management",
            description:
                "I managed component states effectively across 12 projects, ensuring smooth data flow and reactive UI updates.",
            numbers: ["12"],
            keywords: ["state", "smooth", "reactive"],
        },
        Routing: {
            title: "React Routing",
            description:
                "I have set up navigation in over 15 multi-page React applications using React Router, providing seamless user experiences.",
            numbers: ["15"],
            keywords: ["navigation", "React Router", "multi-page"],
        },
        "UI Libs": {
            title: "UI Libraries",
            description:
                "I have integrated React UI libraries in 15+ projects to rapidly implement modern, accessible, and visually appealing components.",
            numbers: ["15"],
            keywords: ["UI libraries", "accessible", "visually appealing"],
        },
        Figma: {
            title: "Figma",
            description:
                "I have converted Figma designs into production-ready interfaces across 11 projects, working efficiently in DEV mode.",
            numbers: ["11"],
            keywords: ["Figma", "production-ready", "DEV mode"],
        },
        "AI Tools": {
            title: "AI Tools",
            description:
                "I can use all AI tools such as cursor, windsurf, copilot, and antigravity, but I prefer copilot. I can complete a month's worth of work in a day and a half with the highest possible quality, making me the mastermind. I can detect and fix errors as quickly as possible, allowing me to complete a project like CARTOPIAA (which you'll find in the projects section) in just 3 days.",
            numbers: ["3", "1.5"],
            keywords: ["AI tools", "copilot", "mastermind", "CARTOPIAA"],
        },
        Git: {
            title: "Git",
            description:
                "I have managed version control and collaborative workflows in 10+ projects using Git, ensuring smooth team coordination.",
            numbers: ["10"],
            keywords: ["Git", "version control", "collaborative"],
        },
        Vite: {
            title: "Vite",
            description:
                "I have used Vite to scaffold and optimize front-end projects, completing 32 projects with high performance and fast builds.",
            numbers: ["32"],
            keywords: ["Vite", "optimize", "performance"],
        },
    };

    const skill = hoveredSkill ? skillInfo[hoveredSkill] : null;

    // Function to highlight numbers and keywords
    const formatText = (text, numbers = [], keywords = []) => {
        let formatted = text;

        // Wrap numbers in span
        numbers.forEach((num) => {
            const regex = new RegExp(`(${num})`, "g");
            formatted = formatted.replace(regex, `<span class="number">$1</span>`);
        });

        // Wrap keywords in span
        keywords.forEach((word) => {
            const regex = new RegExp(`(${word})`, "g");
            formatted = formatted.replace(regex, `<span class="keyword">$1</span>`);
        });

        return formatted;
    };

    return (
        <div className="right-section">
            <div className="container">
                {skill ? (
                    <>
                        <h2>{skill.title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: formatText(skill.description, skill.numbers, skill.keywords),
                            }}
                        ></p>
                    </>
                ) : (
                    <p>Hover over a skill to see its details here</p>
                )}
            </div>
        </div>
    );
}
