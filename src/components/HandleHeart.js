import { useState } from 'react'
import firebase from '../data/firebase'
import logo from '../images/logoHeart.svg'

function HandleHeart() {
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
            <h3>See what others are reading!</h3>
            <button className="heart" onClick={() => handleHeart()}></button>
            {/* <img src={logo} alt="a small heart" className="heart"
                onClick={() => handleHeart()}
            /> */}
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