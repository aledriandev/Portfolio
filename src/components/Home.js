import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = ({ ale }) => {
    const dev = "<Front End Junior />"
    return (
        <div className='myself text-center'>
          <div className='whoIam text-left container-home'>
            <h1>¡Hola!</h1><h1>Soy {ale.name}</h1>
            <br />
            <br />
            <div className='whatIdo'>
              <div className='whatIdo-visible'>
                <h2>{dev}</h2>
              </div>
            </div>
            <br />
          </div>
          <button className='meet-me'><i className="fa fa-chevron-down meet-me-icon" aria-hidden="true"></i></button>
        </div>
    );
  }
  
  export default Home;