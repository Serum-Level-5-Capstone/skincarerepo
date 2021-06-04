import React, { useState, useEffect } from "react"
import axios from "axios"
// import { Context } from "./DataManager"

export const resultsContext = React.createContext()

export default function Results(props) {

    console.log(props.season)

    const [serums, setSerum] = useState([])

    const getSerum = () => {
        axios.get(`/serums/results/${props.season}`)
            .then(res => {
                setSerum(res.data)
            })
    }
    useEffect(() => {
        getSerum()
    }, [])

    const handleSave = () => {

        const serumObj = {
            name: serums.name,
            tag: serums.tag,
            description: serums.description,
            season: serums.season,
            image: serums.image
        }

        axios.post("/my-cart", serumObj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    console.log(serums)

    // map through results outside of return 
    const mappedSerums = serums.map(serum => {
        return <div key={serum.id}><h2>{serum.name}</h2>
            <p>{serum.tag}</p>
            <p>{serum.description}</p>
            <p>{serum.season}</p>
            <img src={serum.image} alt="Serum Image"></img></div>
    })

    return (
        <>
            <resultsContext.Provider value={{
                serums
            }}>
                {props.children}
            </resultsContext.Provider>
            <div>
                {mappedSerums}
                <button onClick={handleSave}>Save Serum</button>
            </div>
        </>
    )
}