import axios from 'axios'
import './App.css'
import {useEffect, useState} from 'react'
import firebase from './firebase'
import logo from './logo.svg'



function BooksFetch() {
    const [book, setBook] = useState([])
    //const [overview, setOverview] = useState('')
    const [inputSearch, setSearch] = useState('')

    useEffect(() => {
        handleQuery('vizzini')

        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {
            const newState = []
            const data = response.val()

            for(let object in data){
                // console.log(data)
                newState.push(data)
            }
            handleHeart(newState)
            console.log(newState)
        })
    },[])

    const handleHeart = (arg) => {
        console.log('help')
        console.log(arg)
        return(
            <p>hello</p>
        )
    }
    
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
            //console.log(response.data.items)
            setBook(response.data.items)
            //handleOverview(response.data.items)
        })
        
    }
    //trouble finding a looping method to not go over all and publish all
    //key property and the paragraph value
    const handleOverview = () => {
        //console.log(res.volumeInfo)
        book.map((plot) => {
            console.log(plot.volumeInfo.description)
            //setOverview(plot.volumeInfo.description)
            return(
                //<p>{overview}</p>     
                console.log(plot.volumeInfo.description)                   
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
            onClick={() => handleHeart()}
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
            <section className="infoDisplay">
            {
                book.map(bookshelf => {
                    return(
                        <>
                        <div className="info" key={bookshelf.id}>
                            <img src={bookshelf.volumeInfo.imageLinks.smallThumbnail} alt={bookshelf.volumeInfo.subtitle}/> 
                            <h2> Title: {bookshelf.volumeInfo.title}</h2>
                            <a href={bookshelf.volumeInfo.infoLink}>Buy Item!</a>
                            <button onClick={handleOverview}>More info!</button>
                        </div>
                        </>
                    )
                })              
            }</section>
        </section>
    )

}

export default BooksFetch