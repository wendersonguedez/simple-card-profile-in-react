import React from 'react';

export default function Intro(props) {
    return (
        <div>
            <h1>{props.myName}</h1>
            <p>{props.aboutMe}</p>
        </div>
    );
}