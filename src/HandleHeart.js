import { useState } from 'react'
import firebase from './firebase'
import logo from './logo.svg'

function HandleHeart(props) {
    const [bookFirebase, setBookFire] = useState([])
    const [clickCounterHeart, setCounterHeart] = useState(false)

    //When user clicks on the heart on page, information on firebase is translated and stored in a new array called newState which is then passed to a set function called setBookFire
    const handleHeart = () => {

        setCounterHeart(!clickCounterHeart)
        const dbRef = firebase.database().ref()
        dbRef.on('value', (response) => {
            const newState = []
            const data = response.val()

            for (let object in data) {
                newState.push(data[object])
            }
            setBookFire(newState)

        })
    }

    return (
        <>
            <img src={logo} alt="heart" className="heart"
                onClick={() => handleHeart()}
            />
            {
                clickCounterHeart && bookFirebase ?
                    bookFirebase.map((bookfire, index) => {
                        return (
                            <div className="fire" key={index}>
                                <p>{bookfire}</p>
                            </div>
                        )
                    })
                    : null
            }
        </>
    )
}

export default HandleHeart