import React, { Component } from 'react';
import html from '../images/herramientas/html.png';
import css from '../images/herramientas/CSS3.png';
import jQuery from '../images/herramientas/jquery.png';
import js from '../images/herramientas/Js.png';
import git from '../images/herramientas/Git.png';
import firebase from '../images/herramientas/firebase.png';
import bootstrap from '../images/herramientas/bootstrap.png';
import react from '../images/herramientas/react.png';
import redux from '../images/herramientas/redux.png';
import sass from '../images/herramientas/sass.png';
import trello from '../images/herramientas/trello.png';

const img = [html,js,css,jQuery, bootstrap, sass, react, redux, firebase, trello, git];
const name = ['HTML/HTML5', 'Javascript/ESC6','CSS/CSS3','jQuery','Bootstrap', 'Sass', 'React', 'Redux-Zero', 'Firebase', 'Trello', 'Git/GitHub'];
const id = ['Skill-HTML','Skill-js','Skill-css','Skill-jQuery','Skill-Bootstrap','Skill-Sass','Skill-Redux','Skill-Firebase','Skill-Trello','Skill-Git'];

const Skills = ({ ale }) => {
  const mySkills = name.map((skill,index) =>{
    return(
      <div className='skill' key={index}>
      <img className='img-skill' src={img[index]} />
      <div className="SkillBar">
        <div id={id[index]}>
          <span className="Skill-Area ">{skill}</span>
        </div>
      </div>
    </div>
    )
  });
  return (
    <div>
      <div className='skills form-v'></div>
      <div className='skills-end form-v'>
      <h1 className='title-parts'>Skills</h1>
        <div id="SkillBox">
          {mySkills}
        </div>
      </div>
    </div>
  );
}

export default Skills;