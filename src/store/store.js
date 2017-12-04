import createStore from 'redux-zero';
import trivia from '../images/projects/trivia.png';
import lyft from '../images/projects/lyft.png';
import youtube from '../images/projects/youtube.png';
import buscaminas from '../images/projects/buscaminas.png';
import memory from '../images/projects/memory.png';
import reserva from '../images/projects/reserva.png';
import fiveBest from '../images/pin/5mejores2.png'
import bestSquad from '../images/pin/mejorSquad.png'
import rocking from '../images/pin/rocking.png'

const student = {
  nameComplete: 'Thalia Alejandra Adrian Tejada',
  name: 'Alejandra',
  campus: 'Arequipa',
  code: 'aqp20171679',
  bio: 'Soy una agile, Front End Developer Junior e Ingeniera Quimica. Mi fascinación por la tecnología me llevó a estudiar en Laboratoria. Allí descubrí mi talento y pasión por la programación, aprendí a desarrollar páginas web de forma individual y colaborativa, teniendo una evolución constante, técnica y personalmente. Muestro en cada trabajo que hago mi capacidad para adaptarme a cualquier situación, superándome a mí misma y mis limitaciones. Me visualizo en el futuro como una Full Stack Developer.',
  englishLevel: 'Básico',
  social: {
      linkedin: 'https://www.linkedin.com/in/alejandraadrian/',

  },
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
  badges: [bestSquad, fiveBest, rocking],
  badgesD: ['Trabajo en equipo', 'Top 5 en Ranking', 'Romper esquemas'],
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
}

const initialState = {
    student: student
};

const store = createStore (initialState);
export default store;   