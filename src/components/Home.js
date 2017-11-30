import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = ({ ale }) => {
    const dev = "<Fron End Junior />"
    return (
        <div className='myself text-center'>
          <div className='whoIam text-left'>
            <h1>¡Hola!</h1><h1>Soy {ale.name}</h1>
            <br />
            <br />
            <div className='whatIdo'>
              <div className='whatIdo-visible'>
                <h2>{dev}</h2>
              </div>
            </div>
            <br />
            <button><i className="fa fa-chevron-down meet-me" aria-hidden="true"></i></button>
          </div>
        </div>
    );
  }
  
  export default Home;