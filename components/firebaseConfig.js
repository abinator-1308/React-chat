import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwsxyJQfT8C7HIu29scko8j1UkE8T0Cs4",
    authDomain: "react-chat-1b4a8.firebaseapp.com",
    databaseURL: "https://react-chat-1b4a8.firebaseio.com",
    projectId: "react-chat-1b4a8",
    storageBucket: "react-chat-1b4a8.appspot.com",
    messagingSenderId: "633005583700",
    appId: "1:633005583700:web:2f5c911db68150a8dd6cc1",
    measurementId: "G-D5L2YTQLQW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
