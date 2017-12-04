import React, { Component } from 'react';
import {connect} from 'redux-zero/react';
import { Row, Col } from 'react-bootstrap';

const Portfolio = ({ ale }) => {
  return (
    <div className='portfolio'>
        <Row className='container portfolio-container'>
            <Col mdOffset={1} md={10}>
                <h1 className='title-parts'>PORTAFOLIO</h1> 
                <div>
                    {
                        ale.works.map((work, index) => {
                        return (
                            <Col md={4} sm={6} xs={12} className="view view-tenth">
                            <img src={work.src} />
                            <div className="mask">
                                <h2>{work.name}</h2>
                                <p>Skills: {work.skills.join('-')}</p>
                                <a target='_blank' href={work.demo} class="info">Demo</a>
                                <a href={work.github} class="info">Code</a>
                            </div>
                            </Col>
                        )
                        })
                    }                    
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Portfolio;