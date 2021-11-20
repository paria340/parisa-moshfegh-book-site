import './App.css';
// import axios from 'axios';
// import {useEffect, useState} from 'react'
import BooksFetch from './BooksFetch';
// import firebase from './firebase.js';

function App() {

  return (
    <div className="App">
      <div className="widthTitle">
      <h1>Image If You Could Read Every Book!</h1></div>

      <BooksFetch />
      <footer>Made at Juno College by Parisa</footer>
    </div>
  );
}

export default App;
