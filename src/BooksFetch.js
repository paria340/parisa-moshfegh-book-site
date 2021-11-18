import axios from 'axios'
import {useEffect, useState} from 'react'


function BooksFetch() {

    const [book, setBook] = useState([])
    const [overview, setOverview] = useState([])

    useEffect(() => {
        const apiKey = 'AIzaSyCSRFpu_8mf8enHbi2TQpvlwE56Mxy3duI'
        const apiURL = 'https://www.googleapis.com/books/v1/volumes'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
            params: {
                key: apiKey,
                q: 'flowers'
           }
        }).then(response => {
            setBook(response.data.items)
        })
    },[])

    const handleOverview = () => {
        book.map(plot => {
            return(
                <>
                    setOverview(<p>{plot.volumeInfo.description}</p>)
                    <p>{overview}</p>
                </>
            ) 
        })
    }

    return(
        <section>
            {
                book.map(bookshelf => {
                    return(
                        <div key={bookshelf.id}>
                           <h2> Titles: {bookshelf.volumeInfo.title}</h2>
                           <img src={bookshelf.volumeInfo.imageLinks.smallThumbnail} alt={bookshelf.volumeInfo.subtitle}/>
                           <button onClick={() => handleOverview()}>More info!</button>
                        </div>
                    )
                })
            }
        </section>
    )

}

export default BooksFetch