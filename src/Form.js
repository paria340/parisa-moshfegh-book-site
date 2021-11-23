import firebase from './firebase'
import { useState } from 'react'

function Form(props) {

    const [inputSearch, setInputSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    //On form submit if there is a userInput, the value will be pushed to firebase and also to handleQuery (API fetching happens) 
    //if not it will show the popUp message to enter St
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const dbRef = firebase.database().ref()
        {
            inputSearch ?
                dbRef.push(inputSearch) && props.handleQuery(inputSearch) && setInputSearch('') 
                :
                setErrorMessage('Please enter a search item') 
        }
    }

    //a function dealing with the select option and passing the value to handleQuery where the API is fetched
    const handleChangeOption = (event) => {
        props.handleQuery(event.target.value)
    }

    //a function dealing with setting the InputSearch to what the user is putting in
    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="aBook">Search your favorite book or author</label>
            <input
                type="text"
                id="aBook"
                value={inputSearch}
                onChange={handleChange}
            />

            <section className="categoryChoosing">
                <label htmlFor="category">Or select a category</label>
                <select name="category" id="category" onChange={handleChangeOption}>
                    <option value defaultValue>Choose Category</option>
                    <option value="Biography">Biography</option>
                    <option value="Children">Children</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-fiction">Non-fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="thriller">Thriller</option>
                </select>
            </section>
        </form>
        {
            errorMessage ? <p>{errorMessage}</p> 
            // :errorMessage && 
            :null
        }
        </>
    )

}

export default Form;