import React, { useState } from 'react'
import './LeftSection.scss'

const categories = [
    { id: 1, name: 'Frontend', skills: ['HTML', 'CSS', 'SCSS', 'Tailwind'] },
    { id: 2, name: 'JavaScript', skills: ['ES6+', 'Async', 'Logic', 'DOM'] },
    { id: 3, name: 'React', skills: ['Hooks', 'State', 'Routing', 'UI Libs'] },
    { id: 4, name: 'Tools', skills: ['Figma', 'AI Tools', 'Git', 'Vite'] }
]

export default function LeftSection({ setHoveredSkill }) {
    const [activeCategory, setActiveCategory] = useState(null)

    return (
        <div className="left-section">
            <div className="orbit">
                <div className={`orbit-rotator ${activeCategory ? 'paused' : ''}`}>
                    <div className="big-circle-skills">
                        {categories.map((cat, index) => (
                            <div
                                key={cat.id}
                                className={`category-node ${activeCategory === cat.id ? 'active' : ''}`}
                                style={{ '--i': index }}
                                onMouseEnter={() => setActiveCategory(cat.id)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                <span className="category-title">{cat.name}</span>
                                {activeCategory === cat.id && (
                                    <div className="skills-orbit">
                                        {cat.skills.map((skill, i) => (
                                            <div
                                                key={i}
                                                className="skill-node"
                                                style={{ '--j': i, '--total': cat.skills.length }}
                                                onMouseEnter={() => setHoveredSkill(skill)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                onClick={() => console.log(skill)}
                                            >
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
