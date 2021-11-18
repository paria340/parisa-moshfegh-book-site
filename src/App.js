import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import BooksFetch from './BooksFetch';
import firebase from './firebase'



function App() {

  const [inputSearch, setSearch] = useState('')


  return (
    <div className="App">
      <h1>Now you can know everything!!</h1>
      <form>
        <label htmlFor="aBook">Search a book title, author etc.</label>
        <input 
          type="text"
          id="aBook"
          value="inputSearch" 
        />

      </form>
      <BooksFetch />
    </div>
  );
}

export default App;
