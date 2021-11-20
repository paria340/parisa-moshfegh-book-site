import { useState } from 'react'
import firebase from './firebase'


function FavoriteOption() {
    //When user clicks on the heart on page, information on firebase is translated and stored in a new array called newState which is then passed to a set function called setBookFire
    const [clickCounter, setCounter] = useState(0)
    const [bookFirebase, setBookFire] = useState([])
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
    return (
        <>
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
        </>
    )

}
export default FavoriteOption