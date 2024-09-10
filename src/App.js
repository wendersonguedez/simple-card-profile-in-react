import React from "react";
import SkillList from "./SkillList";
import Avatar from "./Avatar";
import Intro from "./Intro";

export default function App() {
    const skills = [
        { skillName: 'React', skillEmoji: '🌐', bgColor: '#000' },
        { skillName: 'PHP', skillEmoji: '🐘', bgColor: '#8993be' },
        { skillName: 'Git', skillEmoji: '🦝', bgColor: '#000' },
        { skillName: 'Laravel', skillEmoji: '🚀', bgColor: '#F05340' },
    ];

    return (
        <div className='card'>
            <Avatar photoSrc='photos/wend.jpg' />
            <div className='data'>
                <Intro
                    myName='Wenderson Guedes'
                    aboutMe='Sou um desenvolvedor web full-stack com uma curiosidade constante por novas tecnologias...'
                />
                <SkillList skills={skills} />
            </div>
        </div>
    );
}