import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import me2 from '../images/ale/ale.gif';

const About = ({ ale }) => {
    return (
        <div className='about-me form-v'>
          <div className='title'>
            <h1 className='title-parts'>About Me</h1>
          </div>
          <Row>
            <Col mdOffset={3} md={5} smOffset={2} sm={5} xs={12}>
              <div className='my-bio'>
                {ale.bio}
              </div>
            </Col>
            <Col md={4} sm={5} xs={12}>
              <div className='photo-me'>
                <img className='two' src={me2} />
              </div>
            </Col>
          </Row>
        </div>
    );
  }
  
  export default About;