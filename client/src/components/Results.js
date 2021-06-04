import React, { useState, useEffect } from "react"
import axios from "axios"
// import { Context } from "./DataManager"

export const resultsContext = React.createContext()

export default function Results(props) {

    console.log(props.season)

    const [serums, setSerum] = useState([])
    const [savedSerum, setSavedSerum] = useState([])

    const getSerum = () => {
        axios.get(`/serums/results/${props.season}`)
            .then(res => {
                setSerum(res.data)
                console.log(res.data)
            })
    }
    useEffect(() => {
        getSerum()
    }, [])

    const handleSave = () => {
        console.log(serums)
        const serumObj = {
            name: serums[0].name,
            tag: serums[0].tag,
            description: serums[0].description,
            season: serums[0].season,
            image: serums[0].image
        }
        console.log(serumObj)
        axios.post("/my-cart", serumObj)
            .then(res => setSavedSerum(res.data))
            .catch(err => console.log(err))
    }
    
    // map through results outside of return 
    const mappedSerums = serums.map(serum => {
        return <div key={serum.name}><h2>{serum.name}</h2>
            <p>{serum.tag}</p>
            <p>{serum.description}</p>
            <p>{serum.season}</p>
            <img src={serum.image}></img></div>
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