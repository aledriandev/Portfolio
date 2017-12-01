import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import aleContact from '../images/ale/girlcode5.png'

const Contact = ({ ale }) => {
  return (
    <div>
      <Row className='contact-me'>
        <img className='img-contact' src={aleContact} />
        <Col mdOffset={6} md={6} xs={12} sm={8} className='contactMe'>
          <h1 className='title-parts'>Contact Me</h1>
          <div className='contact-me-data'>
            <h3>Si estas interesado en contactarme:</h3>
            <h4>Celular : 996536337</h4>
            <h4>Email : alejadraadriantejada@gmail.com</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;