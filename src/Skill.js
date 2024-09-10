import React from 'react';
import './index.css';

export default function Skill(props) {
    return (
        <div className='skill' style={{ backgroundColor: props.bgColor, color: '#FFF' }}>
            <span>{props.skillName}</span>
            <span>{props.skillEmoji}</span>
        </div>
    );
}