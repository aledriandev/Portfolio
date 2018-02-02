import React, { Component } from 'react';
import './css/input.css';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const NavVertical = ({}) => {
  return (
    <nav id="vertical-nav">
    <div key="1" className="nav-item">
      <a href='#home'><div className="dot" data-num="1"><span className="dot-label">Inicio</span></div></a>
    </div>
    <div key="2" className="nav-item">
      <a href='#about'><div className="dot" data-num="2"><span className="dot-label">Conóceme</span></div></a>
    </div>
    <div key="3" className="nav-item">
      <a href='#skills'><div className="dot" data-num="3"><span className="dot-label">Habilidades</span></div></a>
    </div>
    <div key="4" className="nav-item">
      <a href='#portfolio'><div className="dot" data-num="4"><span className="dot-label">Portafolio</span></div></a>
    </div>
    <div key="5" className="nav-item">
      <a href='#contact'><div className="dot" data-num="5"><span className="dot-label">Contacto</span></div></a>
    </div>
  </nav>
  )
}

const App = ({ student }) => {
  return (
    <div>
      <NavVertical />
      <Home className='container' ale={student}/>
      <About className='container' ale={student}/>
      <Skills className='container' ale={student}/>
      <Portfolio className='container' ale={student}/>
      <Contact className='container' ale={student}/>
    </div>
  );
}



const mapToProps=({student})=>({student});
export default connect(mapToProps)(App);