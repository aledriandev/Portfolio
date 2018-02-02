import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';
import demoimg from '../images/demo.png';
import codeimg from '../images/code.png';

const Portfolio = ({ ale }) => {
  return (
    <div id='portfolio' className='portfolio'>
        <Row className='container portfolio-container'>
            <Col mdOffset={1} md={10}>
                <h1 className='title-parts'>PORTAFOLIO</h1> 
                <div>
                    {
                        ale.works.map((work, index) => {
                        return (
                            <Col md={6} sm={6} xs={12} >
                                <figure className="snip0058"><img src={work.src} alt="sample57"/>
                                    <figcaption>
                                        <p><span>{work.description}</span></p>
                                        <h2 className="white"><span>{work.name}</span></h2>

                                    </figcaption>
                                </figure>
                                <div className="icons">
                                    <a className='btn-icon' href={work.demo} target='_blank'><img className="demo" src={demoimg}/>Demo</a>
                                    <a className='btn-icon' href={work.github} target='_blank'><img className="code" src={codeimg}/>Github</a>
                                </div>
                            </Col>
                        )
                        })
                    }                    
                </div>
            </Col>
        </Row>
                <div className='portfolio-dates'></div>
    </div>
  )
}

export default Portfolio;