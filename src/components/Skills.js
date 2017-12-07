import React, { Component } from 'react';
import html from '../images/tools/html.png';
import css from '../images/tools/css.png';
import jQuery from '../images/tools/jQuery.png';
import js from '../images/tools/js.png';
import firebase from '../images/tools/firebase.png';
import bootstrap from '../images/tools/bootstrap.png';
import react from '../images/tools/react.png';
import redux from '../images/tools/redux.png';
import sass from '../images/tools/sass.png';
import photoshop from '../images/tools/ps.png'
//herramientas
import trello from '../images/tools/trello.png';
import slack from '../images/tools/slack.png'
import node from '../images/tools/node.png'
import git from '../images/tools/git.png'
import github from '../images/tools/github.png'

import {Row, Col} from 'react-bootstrap'

const img = [html,js,css,jQuery, bootstrap, sass, react, redux, firebase, photoshop];
const name = ['HTML/HTML5', 'Javascript/ESC6','CSS/CSS3','jQuery','Bootstrap', 'Sass', 'React', 'Redux-Zero', 'Firebase', 'Photoshop'];
const id = ['Skill-HTML','Skill-js','Skill-css','Skill-jQuery','Skill-Bootstrap','Skill-Sass','Skill-Redux','Skill-Firebase', photoshop];

const prcent = [90,75,80,80,85,60,75,60,60,30];

const imgTools = [trello, slack, git, github,node];

const Skills = ({ ale }) => {
  const mySkills = name.map((skill,index) =>{
    // console.log('class','progress-radial progress-'+prcent[index])
    return(
      <Col md={2} className='text-center skill-progress'>
        <div className={'progress-radial progress-'+prcent[index]} key={index}>
          <div className="overlay">
            <img className='img-skill' src={img[index]} />
          </div>  
        </div>
      </Col>
    )
  });

  const myHerramientas = imgTools.map((img,index) =>{
    return(
      <Col md={2}>
        <div key={index}>
            <img className='img-tool' src={img} />
        </div>
      </Col>
    )
  });

  const myPins = ale.badges.map((pin, index) => {
    return (
      <Col md={2} sm={4} xs={4}>
        <div className='back-pin'>
          <img className='pin' src={pin} />
          <div className='span-pin'><b>{ale.badgesD[index]}</b></div>
        </div>
      </Col>)
  })

  return (
    <div>
      <div className='skills form-v'></div>
      <div className='skills-end form-v'>
        <Row className="wrap">
          <Col mdOffset={1} md={10}>
            <h1 className='title-parts'>HABILIDADES</h1>
            <br/>
            <Row className='skills-container'>
              {mySkills}
            </Row>
          </Col>
          <br />
            <hr className="dashed" />
          <br />
          <Col mdOffset={1} md={10}>
            <h1 className='title-parts'>HERRAMIENTAS</h1>
            <br/>
            <Row className='skills-container'>
              {myHerramientas}
            </Row>
            <br />
          </Col>
          <Col mdOffset={1} md={10}>
            <h1 className='title-parts'>RECONOCIMIENTOS</h1>
            <br/>
            <Row className='skills-container'>
              {myPins}
            </Row>
          <br />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;