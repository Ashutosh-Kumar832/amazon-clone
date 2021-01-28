  
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDxBQ2VvAY8g49M_uMwiERlFeXxS9ZGBSY",
    authDomain: "clone-ded6b.firebaseapp.com",
    projectId: "clone-ded6b",
    storageBucket: "clone-ded6b.appspot.com",
    messagingSenderId: "391036754501",
    appId: "1:391036754501:web:35a63d9c4d9a9d2534e12c",
    measurementId: "G-3CQG55HL44"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};