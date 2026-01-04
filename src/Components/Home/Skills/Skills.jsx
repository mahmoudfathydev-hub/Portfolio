import React, { useState } from 'react'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import "./Skills.scss"
import LogoLoop from './LogoLoop/LogoLoop'
import BottomSection from './BottomSection/BottomSection'
import Circle from "../../UI/Circle1/Circle1"

export default function SkillsComponents() {
    const [hoveredSkill, setHoveredSkill] = useState(null)
    return (
        <div className='skills-big-section'>
            <Circle />
            <div className="main-section">
                <LeftSection setHoveredSkill={setHoveredSkill} />
                <RightSection hoveredSkill={hoveredSkill} />
            </div>
            <LogoLoop />
            <BottomSection />
        </div>
    )
}
