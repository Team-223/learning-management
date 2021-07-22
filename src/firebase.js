import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2y7YbtN9GiATooxlWvbshTYamPy0Amow",
    authDomain: "hip-spanner-320515.firebaseapp.com",
    projectId: "hip-spanner-320515",
    storageBucket: "hip-spanner-320515.appspot.com",
    messagingSenderId: "51299533288",
    appId: "1:51299533288:web:0a231cac692447c0a6245d",
    measurementId: "G-EWCLET8Y6M"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth };