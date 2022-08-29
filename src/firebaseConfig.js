// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgOWRrASFsV6KwVIjy2v0OyfyoR91yhk",
  authDomain: "lightlife-church.firebaseapp.com",
  databaseURL: "https://lightlife-church-default-rtdb.firebaseio.com",
  projectId: "lightlife-church",
  storageBucket: "lightlife-church.appspot.com",
  messagingSenderId: "573761391869",
  appId: "1:573761391869:web:7ed2df5fa7fedbc751c294",
  measurementId: "G-SQV0V821LW"
};

firebase.initializeApp(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = firebase.firestore(app)
// const auth = auth(app)

// export { auth }