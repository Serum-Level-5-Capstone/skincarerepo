import React, { useState, useEffect } from "react"
import { Context } from "./DataManager"
import axios from "axios"

export default function Results(props, season) {

    const [serum, setSerum] = useState([])

    let pathArray = window.location.pathname.split("/")

    const getSerum = () => {
        return axios.get("/serums")

    }

    useEffect(() => {
        getSerum()
            .then(res => {
                const foundSerum = res.data.find(serum => {
                    console.log(serum.season)
                    return serum.season.toUpperCase() === pathArray[2].toUpperCase()
                })
                setSerum(foundSerum)
            })
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

    return (
        <div>
            <h2>{serum.name}</h2>
            <p>{serum.tag}</p>
            <p>{serum.description}</p>
            <p>{serum.season}</p>
            <img url={serum.image} alt="Serum Image"></img>
            <button onClick={handleSave}>Save Serum</button>
        </div>
    )

}