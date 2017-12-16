import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyAPsQvswvYbQMftKC1MT4AbFPZI34XjD1U",
    authDomain: "portfolio-8a253.firebaseapp.com",
    databaseURL: "https://portfolio-8a253.firebaseio.com",
    projectId: "portfolio-8a253",
    storageBucket: "portfolio-8a253.appspot.com",
    messagingSenderId: "896485311823"
  };

  firebase.initializeApp(config);

  export default firebase;
  
  export const database = firebase.database();
  export const auth = firebase.auth();
  export const storage = firebase.storage();