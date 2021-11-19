import './App.css';
// import axios from 'axios';
// import {useEffect, useState} from 'react'
import BooksFetch from './BooksFetch';
// import firebase from './firebase.js';

function App() {

  return (
    <div className="App">
      <h1>Image If You Could Read Every Book!</h1>

      <BooksFetch />
      <footer>Made at Juno College by Parisa</footer>
    </div>
  );
}

export default App;
