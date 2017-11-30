import createStore from 'redux-zero';
import trivia from '../images/projects/trivia.png';
import lyft from '../images/projects/lyft.png';
import youtube from '../images/projects/youtube.png';
import buscaminas from '../images/projects/buscaminas.png';
import memory from '../images/projects/memory.png';
import reserva from '../images/projects/reserva.png';


const ale = {
  id: '10/26/2017 10:29:16',
  nameComplete: 'Thalia Alejandra Adrian Tejada',
  name: 'Alejandra',
  campus: 'Arequipa',
  code: 'aqp20171679',
  bio: 'Soy Front end web developer Jr. e ingeniera química de profesión. Al descubrir mi pasión por la tecnología decidí emprender un nuevo camino y estudiar en Laboratoria, donde potencie mi talento y aprendí a programar; viviendo así todos los días mi pasión.',
  englishLevel: 'Básico',
  linkedin:
     'https://www.linkedin.com/in/alejandra-adrian-tejada-698562111/',
  portfolio: '',
  works: [{
          name: 'Trello',
          demo: 'https://alejandraadrian.github.io/Trello-firebase',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          src: trivia,
          skills: ['js','html','css'],
      },
      {
          name: 'Buscaminas',
          demo: 'https://alejandraadrian.github.io/Buscaminas/',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          skills: ['js','html','css'],
          src: buscaminas,
      },
      {
          name: 'Memoria',
          demo: 'https://alejandraadrian.github.io/memorize-maze/',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          skills: ['js','html','css'],
          src: memory,
      },
      {
          name: 'Lyft',
          demo: 'https://alejandraadrian.github.io/LYFT-Sprint-4/',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          skills: ['js','html','css'],
          src: lyft,
      },
      {
          name: 'Reserva',
          demo: 'https://alejandraadrian.github.io/Reserva-aerolinea/',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          skills: ['js','html','css'],
          src: reserva,
      },
      {
          name: 'LaboTube',
          demo: 'https://alejandraadrian.github.io/YouTube/',
          github: 'https://github.com/alejandraAdrian/Trello-firebase',
          skills: ['js','html','css'],
          src: youtube,
      },
  ],
  github: 'alejandraadrian@github.io',
  photo:' alejandra',
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

const initialState = {
   ale: ale
};

const store = createStore (initialState);
export default store;   