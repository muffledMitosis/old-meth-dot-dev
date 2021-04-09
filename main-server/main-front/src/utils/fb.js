// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

import "firebase/analytics";
// import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBJDioKm82AZ5EDMOXfZg2h4MXEXFO8NHQ",
  authDomain: "methdotdev.firebaseapp.com",
  projectId: "methdotdev",
  storageBucket: "methdotdev.appspot.com",
  messagingSenderId: "1062183609030",
  appId: "1:1062183609030:web:74d79f736538c5510cadc7",
  measurementId: "G-VK9Z1W5LBP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

export {db};