import './App.scss';
import BooksFetch from './BooksFetch';
import Nav from './Nav';


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
