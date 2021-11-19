import axios from 'axios'
import './App.css'
import {useEffect, useState} from 'react'
import firebase from './firebase'
import logo from './logo.svg'



function BooksFetch() {

    const [book, setBook] = useState([])
    const [overview, setOverview] = useState([])
    const [inputSearch, setSearch] = useState('')

    useEffect(() => {
        handleQuery('vizzini')

        // const dbRef = firebase.database().ref()
        // dbRef.on('value', (response) => {
        //     const newState = []
        //     const data = response.val()

        //     for(let property in data){
        //         console.log(data)
        //         newState.push(data)
        //     }
        //     setSearch(newState)
        // })

        //handleHeart(newState)
    },[])

    // const handleHeart = (favorites) => {
        
    // }
    
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

    const handleOverview = () => {
        book.map(plot => {
            return(
                <>
                    setOverview({plot.volumeInfo.description})
                </>
                
            ) 
        })
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

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
            // onClick={handleHeart}
            />
            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="aBook">Search a book title or an author</label>
                    <input 
                        type="text"
                        id="aBook"
                        value={inputSearch}
                        onChange={handleChange} 
                    />

            </form>
            {
                book.map(bookshelf => {
                    return(
                        <>
                        <div className="info" key={bookshelf.id}>
                            <h2> Titles: {bookshelf.volumeInfo.title}</h2>
                            <img src={bookshelf.volumeInfo.imageLinks.smallThumbnail} alt={bookshelf.volumeInfo.subtitle}/> 
                            <a href={bookshelf.volumeInfo.infoLink}>Buy Item!</a>
                            <button onClick={() => handleOverview()}>More info!</button>
                        </div>
                        </>
                    )
                })              
            }
        </section>
    )

}

export default BooksFetch