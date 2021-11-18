import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCBcSmDs_lWJMnQQPx4Ln6_W_1r361N21g",
    authDomain: "bookshelf-app-ee0c2.firebaseapp.com",
    databaseURL: "https://bookshelf-app-ee0c2-default-rtdb.firebaseio.com",
    projectId: "bookshelf-app-ee0c2",
    storageBucket: "bookshelf-app-ee0c2.appspot.com",
    messagingSenderId: "424760127702",
    appId: "1:424760127702:web:090193714e2c32382b1977",
    measurementId: "G-ZLXHTN74SM"
};

firebase.initializeApp(firebaseConfig)

export default firebase;