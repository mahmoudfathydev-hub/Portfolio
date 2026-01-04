import React from 'react'
import Navbar from '../../Components/Global/Navbar/Navbar'
import Hero from '../../Components/Home/HeroSection/Hero'
import ProjectsSection from '@/Components/Home/ProjectsSection/ProjectsSection'
import ContactSection from '@/Components/Home/ContactSection/ContactSection'
import Footer from '@/Components/Global/Footer/Footer'
import Vision from '@/Components/Home/Vision/Vision'
import SkillsComponents from '../../Components/Home/Skills/Skills'

export default function Home() {
    return (
        <div>
            <Hero />
            <SkillsComponents />
            <ProjectsSection />
            <Vision />
            <ContactSection />
        </div>
    )
}
