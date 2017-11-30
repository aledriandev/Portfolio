import React, { Component } from 'react';
import './css/input.css';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App = ({ ale }) => {
  return (
    <div>
      <Home className='container' ale={ale}/>
      <About className='container' ale={ale}/>
      <Skills className='container' ale={ale}/>
      <Portfolio className='container' ale={ale}/>
      <Contact className='container' ale={ale}/>
    </div>
  );
}



const mapToProps=({ale})=>({ale});
export default connect(mapToProps)(App);