import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBpqMemMKTuaDUNxPsOukJqtKQ9WVrZYfM",
    authDomain: "the-book-app-2021.firebaseapp.com",
    databaseURL: "https://the-book-app-2021-default-rtdb.firebaseio.com",
    projectId: "the-book-app-2021",
    storageBucket: "the-book-app-2021.appspot.com",
    messagingSenderId: "370479776222",
    appId: "1:370479776222:web:efda2ccf3a96cd94679d4f",
    measurementId: "G-G2QRCCD5M3"
};

firebase.initializeApp(firebaseConfig)
export default firebase;
