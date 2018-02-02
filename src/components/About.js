import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import me from '../images/ale/ale1.gif';

const About = ({ ale }) => {

  const abilities = ale.fortalezas.map((fortaleza, indez) => {
    return (
      <Col md={2} sm={2} xs={3}>
        <div className='back-fortaleza'>
          <img className='fortaleza' src={fortaleza.src} />
          <div className='span-fortaleza'><b>{fortaleza.name}</b></div>
        </div>
      </Col>)
  })

  return (
    <div id='about' className='about-me form-v'>
      <Row className='content-about'>
        <div className='my-bio'>
          <Col mdOffset={1}>
            <div className='title'>
              <h1 className='title-parts'>SOBRE MÍ</h1>
            </div>
          </Col>
          <Col mdOffset={1} md={6} smOffset={1} sm={10} xsOffset={1} xs={10} className='about-me-text'>
            <br />
            <div className='my-text'>
              {ale.bio}
              <br />
              <br />
              <button className='btnDownCv'><a target='_blank' href={ale.cv}> <i className="fa fa-download" aria-hidden="true"></i> Revisa mi CV</a></button>

            </div>
            <br />
            <hr className="dashed" />
            <br />
            <div className='my-bio'>
              <div className='title'>
                <h1 className='title-parts'>MIS FOTALEZAS</h1>
              </div>
              <br />
              <Row className='skills-container'>
                {abilities}
              </Row>
            </div>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <div className='photo-me'>
              <img className='two' src={me} />
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default About;