import axios from 'axios'
import './App.scss'
import { useEffect, useState } from 'react'
import Form from './Form'
import HandleHeart from './HandleHeart'
import queries from './queries'
import noImg from './noImg.png'


function BooksFetch() {
    const [book, setBook] = useState([])
    const [overview, setOverview] = useState([]) 
    const [clickCounterOverview, setCounterOverview] = useState(false)

    //what is rendered to the page directly is handeled by a random query from the pre-defined object queries 
    useEffect(() => {
        const randomInt = Math.floor(Math.random() * queries.length)
        handleQuery(queries[randomInt].query)
        
    }, [])

    //the api call which accepts a query and passes it to a state function setBook
    //catches errors from the api in case, and console logs it
    const handleQuery = (query) => {
        const apiKey = 'AIzaSyCSRFpu_8mf8enHbi2TQpvlwE56Mxy3duI'
        const apiURL = 'https://www.googleapis.com/books/v1/volumes'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
            params: {
                key: apiKey,
                q: query,
                maxResults: 12
            }
        }).then(response => {
            setBook(response.data.items)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })

    }

    //When user interacts with the button 'more info' this function is called. The .find method helps to give a unique id to each book item's overview which is saved in a constant called preview. The targeted information is the passed to a state function called stateOverview
    const handleOverview = (bookshelfId) => {
        setCounterOverview(!clickCounterOverview)
        const preview = book.find((plot) => plot.id === bookshelfId)
        setOverview(preview.volumeInfo.description)
    }

    return (
        <section>

            <HandleHeart />

            <Form handleQuery={handleQuery} />

            <section className="infoDisplay">
                {
                    clickCounterOverview ?
                        <div className="summary"><p>Summary: {overview}</p></div>
                        : null

                }
{/* Where the major part of the information is being displayed for the user; this is done but maping over book's each item and getting the required information from the API */}
                {
                    book.map(bookshelf => {
                        return (
                            <div className="info" key={bookshelf.id}>
                                {
                                    bookshelf.volumeInfo.imageLinks ? 
                                        <img src={bookshelf.volumeInfo.imageLinks.thumbnail} alt={bookshelf.volumeInfo.subtitle} />
                                    :   <img src={noImg} alt={'book does not have any so the logo of website is displayed'}/>
                                }
                                <h2> {bookshelf.volumeInfo.title}</h2>
                                <a href={bookshelf.volumeInfo.infoLink}>Get Item!</a>
                                <button onClick={() => handleOverview(bookshelf.id)}>More info!</button>
                            </div>
                        )
                    })

                }
            </section>


        </section>
    )

}

export default BooksFetch