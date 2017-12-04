import React, { Component } from 'react';
import './css/input.css';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = ({ student }) => {
  return (
    <div>
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