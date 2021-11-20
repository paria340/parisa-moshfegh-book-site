import axios from 'axios'
import './App.css'
import {useEffect, useState} from 'react'
import firebase from './firebase'
import logo from './logo.svg'
//import FavoriteOption from './FavoriteOption'
//import MoreInfo from './MoreInfo'




function BooksFetch() {
    const [book, setBook] = useState([])
    const [bookFirebase, setBookFire] = useState([])
    const [overview, setOverview] = useState([])
    const [inputSearch, setSearch] = useState('')
    const [clickCounter, setCounter] = useState(0)
    const [clickCounterOver, setCounterOver] = useState(0)

    //what is rendered to the page on refresh
    useEffect(() => {
        handleQuery('Van Gogh')
    },[])
    
    //When user clicks on the heart on page, information on firebase is translated and stored in a new array called newState which is then passed to a set function called setBookFire
    const handleHeart = () => {
        //the setCounter helps to keep track of how many times the heart on page has been clicked on
        setCounter(clickCounter + 1)
        console.log(clickCounter)
        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {
            const newState = []
            const data = response.val()
    
            for(let object in data){
                newState.push(data[object])
            }
            setBookFire(newState)

        })
    }
    
    //the api call which accepts a query and passes it to a state function setBook
    const handleQuery = (query) => {
        const apiKey = 'AIzaSyCSRFpu_8mf8enHbi2TQpvlwE56Mxy3duI'
        const apiURL = 'https://www.googleapis.com/books/v1/volumes'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
            params: {
                key: apiKey,
                q: query
            }
        }).then(response => {
            setBook(response.data.items)
        })
        
    }

    //When user interacts with the button 'more info' this function is called. The .find method helps to give a unique id to each book item's overview which is saved in a constant called preview. The targeted information is the passed to a state function called stateOverview
    const handleOverview = (bookshelfId) => {
        setCounterOver(clickCounterOver + 1)
        console.log(clickCounterOver)
        const preview =  book.find((plot) => plot.id === bookshelfId) 
        setOverview(preview.volumeInfo.description)
  
        console.log(overview)
    }

    //Saves the user input in a state function called setSearch
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    //pushes the user input (query) saved in a state function to firebase
    //the input search is also passed as an argument to the handle query function 
    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleQuery(inputSearch)
        const dbRef = firebase.database().ref()
        dbRef.push(inputSearch)
        setSearch('')
    }

    return(
        <section>
            <img src={logo} alt="heart" className="heart" 
              onClick={() => handleHeart()}
            // onClick ={<FavoriteOption />} 
            />
            {
                clickCounter % 2 !== 0 && bookFirebase ?
                    bookFirebase.map((book) => {
                        return(
                            <div className="fire">
                                <p>{book}</p>
                            </div>
                        )
                    })
                : null                
            }
            {/* {
                clickCounterOver % 2 !== 0 ? 
                    <p>{overview}</p> 
                :null

            } */}
            

            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="aBook">Search a book title or an author</label>
                    <input 
                        type="text"
                        id="aBook"
                        value={inputSearch}
                        onChange={handleChange} 
                    />
            </form>
            <section className="infoDisplay">
            {
                clickCounterOver % 2 !== 0 ? 
                    <div className="summary"><p>Summary: {overview}</p></div>
                :null

            }
            {
                book.map(bookshelf => {
                    return(
                        <>
                        <div className="info" key={bookshelf.id}>
                            <img src={bookshelf.volumeInfo.imageLinks.smallThumbnail} alt={bookshelf.volumeInfo.subtitle}/> 
                            <h2> Title: {bookshelf.volumeInfo.title}</h2>
                            <a href={bookshelf.volumeInfo.infoLink}>Buy Item!</a>
                            <button onClick={() => handleOverview(bookshelf.id)}>More info!</button>
                        </div>
                        </>
                    )
                })
                              
            }
            </section>
            

        </section>
    )

}

export default BooksFetch