import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const ale = {
    id: '10/26/2017 10:29:16',
    name: 'Thalia Alejandra Adrian Tejada',
    campus: 'Arequipa',
    code: 'aqp201717679',
    bio:
       'Hola! mi nombre es Alejandra, soy Front End Developer Junior, estudie en Laboratoria, y a traves de ella logre descubrir mi pasion por el mundo tecnologico, me considero una persona soñadora y super creativa.',
    englishLevel: 'Básico',
    linkedin:
       'https://www.linkedin.com/in/alejandra-adrian-tejada-698562111/',
    portfolio: '',
    github: 'aqp201717679@github.io',
    photo: alejandra,
    badges: '',
    html:
       '[https://aqp20171679.github.io/trello-laboratoria/ ,\nhttps://aqp20171679.github.io/Proyecto-Final-Sprint-1/,\nhttps://aqp20171679.github.io/memorize-maze/,\nhttps://aqp20171679.github.io/DOM2-Caballos/,\nhttps://aqp20171679.github.io/Maze-Event/ ]',
    jquery:
       '[https://aqp20171679.github.io/game-planet  ,\nhttps://aqp20171679.github.io/Buscaminas/ ,\nhttps://aqp20171679.github.io/Foto-Log-2/,\nhttps://aqp20171679.github.io/memorize-maze/,\nhttps://aqp20171679.github.io/RoadBlock-jQuery/ ]',
    css:
       '[ https://aqp20171679.github.io/SaveTheKoala-2.0/ ,\nhttps://aqp20171679.github.io/App-love-FlexBox/ ,\nhttps://aqp20171679.github.io/Freelancer-FLexBox/,\nhttps://aqp20171679.github.io/Start-Studio/,\nhttps://aqp20171679.github.io/CSS-Z-Garden/ ]',
    react:
       '[ https://aqp20171679.github.io/Trivia-Redux/ ,   https://aqp20171679.github.io/Yape--Sprint-5/, https://github.com/aqp20171679/Proyecto-Lyft,\nhttps://aqp20171679.github.io/Routing-React-DOM/,\nhttps://aqp20171679.github.io/Reserva-aerolinea/ ]',
    education: 'Ingenieria Quimica - Universidad Nacional de San Aguistin',
    workExperience: '',
    testimonials: '',
    resume: ''
 }
ReactDOM.render(<App ale={ale}/>, document.getElementById('root'));
registerServiceWorker();
