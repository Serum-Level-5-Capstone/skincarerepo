import React, { useEffect, useState } from "react"
import axios from "axios"


export default function MyCart(props) {

    const [serumsArray, setSerumsArray] = useState([])

    function getSerums() {
        axios.get("/my-cart")
            .then(res => setSerumsArray(res.data))
            .catch(err => console.log(err))
    }
    
    //clearList()
    useEffect(() => {
        getSerums()
    }, [])

    return (
        <div>
            <h1>Checkout</h1>

            { serumsArray.length > 0 ?
                serumsArray.map(serum => {
                    return <div key={serum.name}><h2>{serum.name}</h2>
                        <p>{serum.tag}</p>
                        <p>{serum.description}</p>
                        <p>{serum.season}</p>
                        <img src={serum.image} alt="Serum Image"></img>
                        <button>Delete</button>
                        </div>
                })
                :
                <> No data found :/ </>
            }

        </div>
    )

}