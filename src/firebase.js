import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmhMF4f2YtYUWH9kXYQJ6RtqDdoAEXX9Y",
    authDomain: "ensemdocs-c4b9e.firebaseapp.com",
    databaseURL: "https://ensemdocs-c4b9e-default-rtdb.firebaseio.com",
    projectId: "ensemdocs-c4b9e",
    storageBucket: "ensemdocs-c4b9e.appspot.com",
    messagingSenderId: "407930526972",
    appId: "1:407930526972:web:7ee4a84cc5419631d20b79",
    measurementId: "G-FFVHK5FXX4"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
