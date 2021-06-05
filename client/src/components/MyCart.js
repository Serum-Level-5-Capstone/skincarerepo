import React, { useEffect, useState } from "react"
import axios from "axios"


export default function MyCart(props) {

    const [serumsArray, setSerumsArray] = useState([])
    const [status, setStatus] = useState([])

    function getSerums() {
        axios.get("/my-cart")
            .then(res => setSerumsArray(res.data))
            .catch(err => console.log(err))
    }

    console.log(serumsArray)

    function deleteSerum(serumId) { // <-- declare id parameter
        console.log(serumId)
        axios.delete(`/my-cart/${serumId}`) // <-- remove ;
            .then(res => {
                setSerumsArray(prevSerums => prevSerums.filter(serum => serum._id !== serumId))
            })
            .catch(error => console.error('There was an error!', error))
    }

    useEffect(() => {
        getSerums()
        console.log("this fired once")
    }, [])

    return (
        <div>
            <h1>Checkout</h1>

            { serumsArray.length > 0 ?
                serumsArray.map(serum => {
                    return <div key={serum._id}><h2>{serum.name}</h2>
                        <p>{serum.tag}</p>
                        <p>{serum.description}</p>
                        <p>{serum.season}</p>
                        <img src={serum.image} alt="Serum Image"></img>
                        <button onClick={() => deleteSerum(serum._id)}>Delete</button>
                    </div>
                })
                :
                <> No data found :/ </>
            }

        </div>
    )

}