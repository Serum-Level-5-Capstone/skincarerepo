import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
// import { Context } from "./DataManager"

export default function Results(props) {
    
    console.log(props.season)
    
    const [serum, setSerum] = useState([])

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

        let serumsArray = []

        const serumObj = {
            name: serum.name,
            tag: serum.tag,
            description: serum.description,
            season: serum.season,
            image: serum.image
        }
        serumsArray.push(serumObj)
    }
    console.log(serum)
    // map through results outside of return 
    return (
        <div>
            {/* <h2>{serum.name}</h2>
            <p>{serum.tag}</p>
            <p>{serum.description}</p>
            <p>{serum.season}</p>
            <img url={serum.image} alt="Serum Image"></img>*/}
            <button onClick={handleSave}>Save Serum</button> 
        </div>
    )

}