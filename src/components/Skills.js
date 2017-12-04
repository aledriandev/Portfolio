import React, { Component } from 'react';
import html from '../images/tools/html.png';
import css from '../images/tools/css.png';
import jQuery from '../images/tools/jQuery.png';
import js from '../images/tools/js.png';
import git from '../images/tools/git.png';
import firebase from '../images/tools/firebase.png';
import bootstrap from '../images/tools/bootstrap.png';
import react from '../images/tools/react.png';
import redux from '../images/tools/redux.png';
import sass from '../images/tools/sass.png';
import trello from '../images/tools/trello.png';
import {Row, Col} from 'react-bootstrap'

const img = [html,js,css,jQuery, bootstrap, sass, react, redux, firebase];
const name = ['HTML/HTML5', 'Javascript/ESC6','CSS/CSS3','jQuery','Bootstrap', 'Sass', 'React', 'Redux-Zero', 'Firebase'];
const id = ['Skill-HTML','Skill-js','Skill-css','Skill-jQuery','Skill-Bootstrap','Skill-Sass','Skill-Redux','Skill-Firebase'];

const prcent = [90,75,80,80,85,60,75,60,60];

const imgTools = [trello, git];
const nameTools = ['Trello', 'Git/GitHub'];
const idTools = ['Skill-Trello','Skill-Git'];

const Skills = ({ ale }) => {
  const mySkills = name.map((skill,index) =>{
    console.log('class','progress-radial progress-'+prcent[index])
    return(
      <Col md={3} className='text-center skill-progress'>
        <div className={'progress-radial progress-'+prcent[index]} key={index}>
          <div className="overlay">
            <img className='img-skill' src={img[index]} />
          </div>  
        </div>
      </Col>
    )
  });
  // console.log
  const myTools = nameTools.map((tool,index) =>{
    return(
      <div className='skill' key={index}>
      <img className='img-skill' src={imgTools[index]} />
      <div className="SkillBar">
        <div id={id}>
          <span className="Skill-Area ">'holi'</span>
        </div>
      </div>
    </div>
    )
  });



  return (
    <div>
      <div className='skills form-v'></div>
      <div className='skills-end form-v'>
        <Row className="wrap">
          <Col mdOffset={1} md={10}>
            <h1 className='title-parts'>HABILIDADES</h1>
            <br/>
            {mySkills}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;