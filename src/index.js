import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar
        photoName='photos/wend.jpg'
      />
      <div className='data'>
        <Intro
          myName='Wenderson Guedes'
          aboutMe='Desenvolvedor web full-stack bastante curioso pelas áreas da tecnologia.
          Gosto de me reunir com meus amigos para fazer nossas noites de jogos, fazer comida e levar a noite jogando conversa fora.'
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className='avatar' src={props.photoName} alt={props.photoName}></img>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.myName}</h1>
      <p>
        {props.aboutMe}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill
        skillName='React'
        skillEmoji='🌐'
        bgColor='#000'
      />
      <Skill
        skillName='PHP'
        skillEmoji='🐘'
        bgColor='#8993be'
      />
      <Skill
        skillName='Git'
        skillEmoji='🦝'
        bgColor='#000'
      />
      <Skill
        skillName='Laravel'
        skillEmoji='🚀'
        bgColor='#F05340'
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.bgColor, color: '#FFF' }}>
      <span>{props.skillName}</span>
      <span>{props.skillEmoji}</span>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);