import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1LjHcjjZds83dKPVogrVvDPXG4HjQNGw",
  authDomain: "reddit-clone-3f6ef.firebaseapp.com",
  databaseURL: "https://reddit-clone-3f6ef.firebaseio.com",
  projectId: "reddit-clone-3f6ef",
  storageBucket: "reddit-clone-3f6ef.appspot.com",
  messagingSenderId: "462074745371",
  appId: "1:462074745371:web:dcbe50bf1c223f8e"
};

export default firebase.initializeApp(firebaseConfig);