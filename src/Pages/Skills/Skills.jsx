import React from 'react'
import SkillsComponents from '@/Components/Home/Skills/Skills'

export default function Skills() {
    return (
        <div>
            <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <div className="text-header" >
                    <p style={{
                        fontSize: '1.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'var(--red-500)',
                        textAlign: 'center',
                        gap: '1rem',
                        paddingTop: '10rem'
                    }}>
                        My<span style={{ color: 'var(--white-100)' }}>Skills</span>
                    </p>
                </div>
            </div>
            <SkillsComponents />
        </div>
    )
}
