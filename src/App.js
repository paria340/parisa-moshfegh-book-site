import './App.scss';
// import axios from 'axios';
// import {useEffect, useState} from 'react'
import BooksFetch from './BooksFetch';
import Nav from './Nav';
// import firebase from './firebase.js';

function App() {

  return (
    <div className="App">
      <a id="logo" href="." className="logo">
        <span>Book Genius</span>
      </a>
      <div className="Title">
        <h1>Imagine If You Could Read Every Book!</h1>
      </div>

      <BooksFetch />
      <footer> 
        <Nav />
        <p>Made at <a href="https://junocollege.com">Juno College</a> by Parisa</p>
      </footer>
    </div>
  );
}

export default App;
