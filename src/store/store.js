import createStore from 'redux-zero';
import trivia from '../images/projects/trivia.png';
import lyft from '../images/projects/lyft.png';
import youtube from '../images/projects/youtube.png';
import buscaminas from '../images/projects/buscaminas.png';
import memory from '../images/projects/memory.png';
import reserva from '../images/projects/reserva.png';
import fiveBest from '../images/pines/5mejores2.png'
import bestSquad from '../images/pines/mejorSquad.png'
import rocking from '../images/pines/rocking.png'
import adapta from '../images/fortalezas/adapta.png'
import agil from '../images/fortalezas/agil.png'
import autodidact from '../images/fortalezas/autodidact.png'
import comunica from '../images/fortalezas/comunica.png'
import creative from '../images/fortalezas/creative.png'
import out from '../images/fortalezas/out.png'
import proact from '../images/fortalezas/proact.png'
import resilien from '../images/fortalezas/resilien.png'
import responsive from '../images/fortalezas/responsive.png'
import teamw from '../images/fortalezas/teamw.png'


const student = {
  nameComplete: 'Thalia Alejandra Adrian Tejada',
  name: 'Alejandra',
  campus: 'Arequipa',
  code: 'aqp20171679',
  bio: 'Soy agile, Front End Developer Junior e Ingeniera Química. Mi fascinación por la tecnología me llevó a estudiar en Laboratoria, donde descubrí mi talento y pasión por la programación, aprendí a desarrollar paginas web de forma individual y colaborativa. Busco retarme día a día con nuevas experiencias que me lleven a superarme a mí misma.',
  englishLevel: 'Básico',
  cv: 'https://drive.google.com/file/d/1sCWynwU1djgjoa00O1Wbx52TG4d6cSLy/view?usp=sharing',
  social: {
      linkedin: 'https://www.linkedin.com/in/alejandraadrian/',
      github: 'https://github.com/alejandraAdrian',
      correo: 'alejandraadrianteada@gmail.com',
      whatsapp: '996536337',
      instagram: 'https://www.instagram.com/alejandratat/',
  },
  fortalezas:[
      {
          name: 'Diseño responsive',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: responsive
      },
      {
          name: 'Pensar fuera de la caja',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: out
      },
      {
          name: 'Adaptabilidad',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: adapta
      },
      {
          name: 'Tener la cultura Agile',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: agil
      },
      {
          name: 'Ser autodidacta',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: autodidact
      },
      {
          name: 'Comunicacion constante',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: comunica
      },
      {
          name: 'Muy creativa',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: creative
      },
      {
          name: 'Proactiva',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: proact
      },
      {
          name: 'Trabajo en equipo',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: teamw
      },
      {
          name: 'Resiliencia',
          description: '¿Laptop? ¿Tablet? ¿Mobil?',
          src: resilien
      },
  ],
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