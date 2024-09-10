import React from 'react';
import Skill from './Skill';

export default function SkillList(props) {
    return (
        <div className='skill-list'>
            {props.skills.map((skill, index) => (
                <Skill
                    key={index}
                    skillName={skill.skillName}
                    skillEmoji={skill.skillEmoji}
                    bgColor={skill.bgColor}
                />
            ))}
        </div>
    );
}