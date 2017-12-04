import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import me from '../images/ale/ale1.gif';

const About = ({ ale }) => {
  const pins = ale.badges.map((pin,index)=>{
    return( 
      <Col md={4}>
        <div className='back-pin'>
          <img className='pin' src={pin}/>
          <div className='span-pin'><b>{ale.badgesD[index]}</b></div>
        </div>
      </Col>)
  })
  return (
    <div className='about-me form-v'>
      <Row className='content-about'>
        <Col mdOffset={1} md={6} smOffset={2} sm={5} xs={12}>
          <div className='my-bio'>
            <div className='title'>
              <h1 className='title-parts'>SOBRE MÍ</h1>
            </div>
            <br />
            {ale.bio}
            <br />
            <div className='pins'>{pins}</div>
          </div>
        </Col>
        <Col md={4} sm={5} xs={12}>
          <div className='photo-me'>
            <img className='two' src={me} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;