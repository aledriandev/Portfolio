import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import aleContact from '../images/ale/girlcode5.png'

const Contact = ({ ale }) => {
  const social = () => {
    return (
      <div className="social-icons">
        <a className="social-icon social-icon--linkedin" target='_blank' href={ale.social.linkedin}>
          <i className="fa fa-linkedin fa-2x"></i>
          <div className="tooltip">LinkedIn</div>
        </a>
        <a className="social-icon social-icon--github" target='_blank' href={ale.social.github}> 
          <i className="fa fa-github fa-2x"></i>
          <div className="tooltip">Github</div>
        </a>
        {/* <a className="social-icon social-icon--instagram" href=''>
          <i className="fa fa-instagram fa-2x"></i>
          <div className="tooltip">Instagram</div>
        </a> */}

        {/* <a className="social-icon social-icon--instagram" href=''>
          <i className="fa fa-envelope fa-2x"></i>
          <div className="tooltip">alejandraadriantejada@gmail.com</div>
        </a> */}

        <a className="social-icon social-icon--instagram" href=''>
          <i className="fa fa-mobile fa-2x"></i>
          <div className="tooltip">996536337</div>
        </a>
      </div>
    )
  }
  return (
    <div>
      <Row className='contact-me'>
        <img className='img-contact' src={aleContact} />
        <Col mdOffset={6} md={6} xs={12} sm={8} className='contactMe'>
          <h1 className='title-parts'>Contact Me</h1>
          <div className='contact-me-data'>
            <h3>Si estas interesado en contactarme:</h3>
            {social()}
            <h4>Déjame un mensaje: </h4>
            <form className="formContact" onSubmit={(e)=>e.preventDefault()}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Correo" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Asunto" />
              </div>
              <textarea className="form-control" rows="3" placeholder="Mensaje"></textarea>
              <button type="submit" className="btnSend">Enviar</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;